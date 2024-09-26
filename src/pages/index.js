import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { useEffect, useState } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Fonts from "../components/fonts";
import ArticleHeader from "../components/article-header";

const IndexPage = ({ data }) => {
    const mostRecentArticle = data.allMdx.nodes[0];

    return (
        <Layout pageTitle="Home Page">
            <h2>Most Recent</h2>
            <ArticleHeader
                title={mostRecentArticle.frontmatter.title}
                date={mostRecentArticle.frontmatter.date}
            ></ArticleHeader>
            <p>{mostRecentArticle.excerpt}</p>
            <Link to={`/blog/${mostRecentArticle.frontmatter.slug}`}>
                <h2>Read More</h2>
            </Link>
        </Layout>
    );
};

export const Head = () => (
    <>
        <Seo title="Home Page"></Seo>
        <Fonts></Fonts>
    </>
);

export default IndexPage;

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC } }, limit: 1) {
            nodes {
                frontmatter {
                    title
                    slug
                    date(formatString: "MMMM, D, YYYY")
                    related {
                        slug
                        title
                    }
                }
                id
                excerpt(pruneLength: 1000)
            }
        }
    }
`;
