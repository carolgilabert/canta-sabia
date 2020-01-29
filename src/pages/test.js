import React from 'react';
import Header from '../components/Header';

const TestPage = () => (
    <React.Fragment>
        <Header />
        <p>
            Hello there! 👋
        </p>
    </React.Fragment>
);

export const pageQuery = graphql`
    query TestQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 20
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        author
                        tags
                        date
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

export default TestPage;
