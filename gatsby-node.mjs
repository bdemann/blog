import {writeFile} from 'fs/promises';
import path from 'path';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {unified} from 'unified';

// Replacing module.exports with an export statement
export const createPages = async ({graphql, actions}) => {
  const {createPage} = actions;

  // Query all posts and get their tags
  const tagsMdxResult = await graphql(`
    {
      allMdx(filter: {internal: {contentFilePath: {regex: "/posts/"}}}) {
        edges {
          node {
            frontmatter {
              tags
              slug
            }
          }
        }
      }
    }
  `);

  // Create a Set to store unique tags
  const allTags = new Set();

  tagsMdxResult.data.allMdx.edges.forEach(({node}) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach((tag) => {
        allTags.add(tag);
      });
    }
  });

  // Create a page for each tag
  const tagTemplate = path.resolve(`./src/templates/tag-template.js`);
  allTags.forEach((tag) => {
    createPage({
      path: `/tags/${tag}`,  // URL for the tag page
      component: tagTemplate,
      context: {
        tag,
      },
    });
  });
};

// Write a full-content RSS feed to public/rss.xml so readers and importers
// (e.g. Substack) can pick up every post.
export const onPostBuild = async ({graphql}) => {
  const {data} = await graphql(`
    {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
      allMdx(
        filter: {internal: {contentFilePath: {regex: "/posts/"}}}
        sort: {frontmatter: {date: DESC}}
      ) {
        nodes {
          body
          frontmatter {
            title
            date
            slug
            tags
          }
        }
      }
    }
  `);

  const toHtml = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify);
  const cdata = (text) => `<![CDATA[${String(text).replaceAll(']]>', ']]]]><![CDATA[>')}]]>`;
  const {title, siteUrl} = data.site.siteMetadata;

  const items = await Promise.all(
    data.allMdx.nodes.map(async ({body, frontmatter}) => {
      const link = `${siteUrl}/blog/${frontmatter.slug}/`;
      const html = String(await toHtml.process(body));
      const categories = (frontmatter.tags ?? [])
        .map((tag) => `      <category>${cdata(tag)}</category>`)
        .join('\n');
      return [
        '    <item>',
        `      <title>${cdata(frontmatter.title)}</title>`,
        `      <link>${link}</link>`,
        `      <guid isPermaLink="true">${link}</guid>`,
        `      <pubDate>${new Date(`${frontmatter.date}T12:00:00Z`).toUTCString()}</pubDate>`,
        categories,
        `      <content:encoded>${cdata(html)}</content:encoded>`,
        '    </item>',
      ]
        .filter(Boolean)
        .join('\n');
    }),
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">',
    '  <channel>',
    `    <title>${cdata(title)}</title>`,
    `    <link>${siteUrl}/</link>`,
    `    <description>${cdata(title)}</description>`,
    ...items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');

  await writeFile(path.join('public', 'rss.xml'), xml);
  console.log(`Wrote public/rss.xml with ${items.length} posts`);
};
