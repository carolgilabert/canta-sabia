import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p>This looks very basic now, but hopefully it will improve over time :)</p>
      <h2>Songs</h2>
      <section>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }, index) => {
            return (
              <article key={post.id}>
                <Link to={post.fields.slug}>
                  <p>
                    {`
                      ${post.frontmatter.title} - ${post.frontmatter.author}
                      [${post.frontmatter.tags.join(" - ")}]
                    `}
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
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          frontmatter {
            title
            author
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

export default IndexPage
