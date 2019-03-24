const parseFilepath = require('parse-filepath');
const path = require('path');
const slash = require('slash');
const _ = require('lodash');

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {        
        const fileNode = getNode(node.parent);
        const parsedFilePath = parseFilepath(fileNode.relativePath);
        const slug = `/${parsedFilePath.dir}/${parsedFilePath.name}`;
        
        createNodeField({ node, name: 'slug', value: slug });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        const songTemplate = path.resolve('src/templates/song-template.js');
        const tagTemplate = path.resolve('src/templates/tag-template.js');
        const authorTemplate = path.resolve('src/templates/author-template.js');
        resolve(
            graphql(
                `
            {
              allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date] }) {
                edges {
                  node {
                    fields {
                      slug
                    }
                    frontmatter {
                        tags
                        author
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

                //Creating song pages
                const posts = result.data.allMarkdownRemark.edges;

                posts.forEach(edge => {
                    createPage({
                        path: `${edge.node.fields.slug}`,
                        component: slash(songTemplate),
                        context: {
                            slug: edge.node.fields.slug
                        }
                    });
                });

                
                let tags = [];
                let authors = [];
                _.each(posts,
                    edge => {
                        if (_.get(edge, "node.frontmatter.tags")) {
                            tags = tags.concat(edge.node.frontmatter.tags);
                        }

                        if (_.get(edge, "node.frontmatter.author")) {
                            authors = authors.concat(edge.node.frontmatter.author);
                        }
                    }
                );

                tags = _.uniq(tags);
                authors = _.uniq(authors);

                //Creating tag pages
                tags.forEach(tag => {
                    createPage({
                        path: `/tags/${_.kebabCase(tag)}`,
                        component: slash(tagTemplate),
                        context: {
                            tag
                        }
                    })
                });

                //Creating author pages
                authors.forEach(author => {
                    createPage({
                        path: `/authors/${_.kebabCase(author)}`,
                        component: slash(authorTemplate),
                        context: {
                            author
                        }
                    })
                });
            })
        );
    });
};
