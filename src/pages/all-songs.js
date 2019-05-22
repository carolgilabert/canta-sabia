import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <Layout>
            <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
            <h1>All Songs</h1>
            <section>
                {posts
                    .filter(post => post.node.frontmatter.title.length > 0)
                    .map(({ node: post }, index) => {
                        return (
                            <article key={post.id}>
                                <Link to={post.fields.slug}>
                                    <p>
                                        {`${post.frontmatter.title} - ${
                                            post.frontmatter.author.name
                                        }`}
                                    </p>
                                </Link>
                            </article>
                        );
                    })}
            </section>
        </Layout>
    );
};

export const pageQuery = graphql`
    query AllSongsQuery {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        author {
                            name
                        }
                        tags
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

export default IndexPage;
