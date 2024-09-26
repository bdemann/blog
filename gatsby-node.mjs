import path from 'path';

// Replacing module.exports with an export statement
export const createPages = async ({graphql, actions}) => {
  const {createPage} = actions;

  // Query all posts and get their tags
  const result = await graphql(`
    {
      allMdx {
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

  result.data.allMdx.edges.forEach(({node}) => {
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

export const onPostBuild = () => {
  console.log('Build is done!')
}
