import path from 'path';

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

  const result = await graphql(`
    query {
      allMdx(filter: {internal: { contentFilePath: {regex: "/gallery/"}}}) {
        nodes {
          frontmatter {
            slug
            title
            longDescription
            image {
              childImageSharp {
                gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
              }
            }
          }
        }
      }
    }
  `);

  const galleryTemplate = path.resolve('./src/templates/gallery-item.js');

  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: `/gallery/${node.frontmatter.slug}`,
      component: galleryTemplate,
      context: {
        slug: node.frontmatter.slug,
        frontmatter: node.frontmatter,
      },
    });
  });
};

export const onPostBuild = () => {
  console.log('Build is done!')
}
