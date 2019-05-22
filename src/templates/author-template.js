import React from 'react';
import PropTypes from 'prop-types';

import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const Authors = ({ pageContext, data }) => {
    const { author } = pageContext;
    const { edges, totalCount } = data.allMarkdownRemark;
    const authorHeader = `${totalCount} song${
        totalCount === 1 ? '' : 's'
    } by ${author}`;

    return (
        <Layout>
            <h1>{authorHeader}</h1>
            <ul>
                {edges.map(({ node }) => {
                    const { slug } = node.fields;
                    const { title } = node.frontmatter;
                    return (
                        <li key={slug}>
                            <Link to={slug}>{title}</Link>
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
};

Authors.propTypes = {
    pageContext: PropTypes.shape({
        author: PropTypes.string.isRequired
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                            author: PropTypes.any
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired
                        })
                    })
                }).isRequired
            )
        }),

    })
};

export default Authors;

export const pageQuery = graphql`
    query($author: String) {
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { author: { eq: $author } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        author {
                            name
                            bio
                            image
                        }
                        title
                    }
                }
            }
        }
    }
`;
