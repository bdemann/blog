import React from "react";
import { Link, graphql } from "gatsby";
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
                <ul>
                    {posts.map(({ node }) => (
                        <>
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
                        </>
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

export const Head = () => (
    <>
        <Seo title="Tags"></Seo>
        <Fonts></Fonts>
    </>
);

export default TagTemplate;
