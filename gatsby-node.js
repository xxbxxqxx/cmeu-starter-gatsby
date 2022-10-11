const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allContentfulSampleBlogPost(
          filter: {node_locale: {eq: "en-US"}}
        ) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors);
      }

      const template = path.resolve("./src/templates/post.tsx");
      result.data.allContentfulSampleBlogPost.edges.forEach(edge => {
        createPage({
          path: `/post/${edge.node.slug}/`,
          component: slash(template),
          context: {
            slug: edge.node.slug,
            id: edge.node.id
          }
        });
      });

    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};