/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import _ from 'lodash';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const Template = ({ data }) => {
    const { markdownRemark: post } = data;
    return (
        <Layout title={post.frontmatter.title} description={post.excerpt}>
            <h1>{post.frontmatter.title}</h1>
            <h2>
                <Link to={`/authors/${_.kebabCase(post.frontmatter.author)}`}>
                    {post.frontmatter.author}
                </Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    );
};

export const pageQuery = graphql`
    query SongByPath($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            excerpt(pruneLength: 250)
            frontmatter {
                title
                author
                tags
            }
        }
    }
`;

export default Template;
