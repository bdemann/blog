import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Book from "../components/book";
import Seo from "../components/seo";
import Fonts from "../components/fonts";
import { pageHeader } from "../styles/common.module.css";

const TagTemplate = ({ data, pageContext }) => {
    const { tag } = pageContext;
    const { edges: posts } = data.allMdx;

    return (
        <Layout>
            <div>
                <h1 className={pageHeader}>Posts tagged with "{tag}"</h1>
                {posts.map(({ node }) => (
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
            </div>
        </Layout>
    );
};

export const query = graphql`
    query ($tag: String!) {
        allMdx(
            sort: { frontmatter: { title: ASC } }
            filter: {
                internal: { contentFilePath: { regex: "/posts/" } }
                frontmatter: { tags: { in: [$tag] } }
            }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 500)
                    id
                    frontmatter {
                        date(formatString: "MMMM D, YYYY")
                        title
                        slug
                        color
                    }
                }
            }
        }
    }
`;

export const Head = ({ pageContext }) => (
    <>
        <Seo title={pageContext.tag}></Seo>
        <Fonts></Fonts>
    </>
);

export default TagTemplate;
