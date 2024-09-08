import { graphql, Link } from "gatsby";
import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <Link to={node.frontmatter.slug}>
                        <h2>{node.frontmatter.title}</h2>
                    </Link>
                    <p>Posted: {node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                </article>
            ))}
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC } }) {
            nodes {
                excerpt
                frontmatter {
                    date(formatString: "MMMM, D, YYYY")
                    title
                    slug
                }
                id
            }
        }
    }
`;

export const Head = () => <Seo title="MyBlog Posts" />;

export default BlogPage;
