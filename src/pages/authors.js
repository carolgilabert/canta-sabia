import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AuthorsPage = ({
    data: {
        allMarkdownRemark: { group }
    }
}) => {
    return (
        <Layout>
            <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
            <h1>Authors</h1>
            <section>
                <ul>
                    {group.map(author => (
                        <li key={author.fieldValue}>
                            <Link
                                to={`/authors/${kebabCase(author.fieldValue)}/`}
                            >
                                {author.fieldValue} ({author.totalCount})
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
};

AuthorsPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired
                }).isRequired
            )
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired
            })
        })
    })
};

export const pageQuery = graphql`
    query AuthorsQuery {
        allMarkdownRemark {
            group(field: frontmatter___author) {
                fieldValue
                totalCount
            }
        }
    }
`;

export default AuthorsPage;
