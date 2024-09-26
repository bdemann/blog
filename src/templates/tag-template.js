import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const TagTemplate = ({ data, pageContext }) => {
    const { tag } = pageContext;
    const { edges: posts } = data.allMdx;

    return (
        <Layout>
            <div>
                <h1>Posts tagged with "{tag}"</h1>
                <ul>
                    {posts.map(({ node }) => (
                        <li key={node.id}>
                            <Link to={`/blog/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query ($tag: String!) {
        allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
            edges {
                node {
                    id
                    frontmatter {
                        slug
                        title
                    }
                }
            }
        }
    }
`;

export default TagTemplate;
