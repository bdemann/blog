import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Fonts from "../../components/fonts";

import {
    dateContainer,
    leftLine,
    rightLine,
    date,
    title,
} from "./blob-page.module.css";

const BlogPost = ({ data, children }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <h1 className={title}>{data.mdx.frontmatter.title}</h1>
            <div className={dateContainer}>
                <hr className={leftLine} />
                <span className={date}>{data.mdx.frontmatter.date}</span>
                <hr className={rightLine} />
            </div>
            {children}
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
        }
    }
`;

export const Head = ({ data }) => (
    <>
        <Seo title={data.mdx.frontmatter.title} />
        <Fonts></Fonts>
    </>
);

export default BlogPost;
