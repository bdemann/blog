import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Fonts from "../components/fonts";
import ArticleHeader from "../components/article-header";
import { pageHeader } from "../styles/common.module.css";

const IndexPage = ({ data }) => {
    const mostRecentArticle = data.allMdx.nodes[0];

    return (
        <Layout pageTitle="Home Page">
            <h1 className={pageHeader}>Most Recent</h1>
            <ArticleHeader
                title={mostRecentArticle.frontmatter.title}
                date={mostRecentArticle.frontmatter.date}
            />
            <p>{mostRecentArticle.excerpt}</p>
            <Link to={`/blog/${mostRecentArticle.frontmatter.slug}`}>
                Read More
            </Link>
        </Layout>
    );
};

export const Head = () => (
    <>
        <Seo title="Home Page" />
        <Fonts />
    </>
);

export default IndexPage;

export const query = graphql`
    query {
        allMdx(
            sort: { frontmatter: { date: DESC } }
            limit: 1
            filter: { internal: { contentFilePath: { regex: "/posts/" } } }
        ) {
            nodes {
                frontmatter {
                    title
                    slug
                    date(formatString: "MMMM D, YYYY")
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
