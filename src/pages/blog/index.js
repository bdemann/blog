import { graphql } from "gatsby";
import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Fonts from "../../components/fonts";
import Book from "../../components/book";

import { pageHeader } from "../../styles/common.module.css";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <h1 className={pageHeader}>All Articles</h1>
            {data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <Book
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        excerpt={node.excerpt}
                        to={`/blog/${node.frontmatter.slug}`}
                        color={node.frontmatter.color ?? "brown"}
                    ></Book>
                    <br></br>
                </article>
            ))}
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(
            sort: { frontmatter: { date: DESC } }
            filter: { internal: { contentFilePath: { regex: "/posts/" } } }
        ) {
            nodes {
                excerpt(pruneLength: 500)
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    slug
                    color
                }
                id
            }
        }
    }
`;

export const Head = () => (
    <>
        <Seo title="Blog"></Seo>
        <Fonts></Fonts>
    </>
);

export default BlogPage;
