/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import Link from 'gatsby-link'
import { graphql } from 'gatsby';
import Layout from '../components/layout';


const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout title={post.frontmatter.title} description={post.excerpt}>
        <Link to="/">&larr; Back</Link>
        <h2>{post.frontmatter.title}</h2>
        <h5>{post.frontmatter.author}</h5>
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
