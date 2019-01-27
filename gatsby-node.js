const parseFilepath = require('parse-filepath');
const path = require('path');
const slash = require('slash');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
    const { createNodeField } = boundActionCreators;
    if (node.internal.type === 'MarkdownRemark') {        
        const fileNode = getNode(node.parent);
        const parsedFilePath = parseFilepath(fileNode.relativePath);

        const slug = `/${parsedFilePath.dir}`;
        console.log("--------- SLUG");
        console.log(slug);
        
        createNodeField({ node, name: 'slug', value: slug });
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
        const songTemplate = path.resolve(
            'src/templates/song-template.js'
        );
        resolve(
            graphql(
                `
            {
              allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug
                    }
                  }
                }
              }
            }
          `
            ).then(result => {
                if (result.error) {
                    reject(result.error);
                }

                result.data.allMarkdownRemark.edges.forEach(edge => {
                    createPage({
                        path: `${edge.node.fields.slug}`,
                        component: slash(songTemplate),
                        context: {
                            slug: edge.node.fields.slug
                        }
                    });
                });
            })
        );
    });
};
