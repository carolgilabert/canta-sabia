import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import Layout from '../components/layout';
import SEO from '../components/seo';

const TagsPage = ({
    data: {
        allMarkdownRemark: { group }
    }
}) => {
    return (
        <Layout>
            <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
            <h1>Tags</h1>
            <section>
                <ul>
                    {group.map(tag => (
                        <li key={tag.fieldValue}>
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                {tag.fieldValue} ({tag.totalCount})
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
};

TagsPage.propTypes = {
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
    query TagsQuery {
        allMarkdownRemark {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;

export default TagsPage;
