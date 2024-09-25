import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Fonts from "../../components/fonts";

import {
    dateContainer,
    leftLine,
    rightLine,
    date,
    title,
    post,
    postContainer,
    sideBar,
    tags,
    tag,
    relatedArticles,
} from "./blob-page.module.css";
import About from "../../components/about";

const BlogPost = ({ data, children }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <h1 className={title}>{data.mdx.frontmatter.title}</h1>
            <div className={dateContainer}>
                <hr className={leftLine} />
                <span className={date}>{data.mdx.frontmatter.date}</span>
                <hr className={rightLine} />
            </div>
            <div className={postContainer}>
                <div className={sideBar}>
                    <hr />
                    <div className={tags}>
                        {data.mdx.frontmatter.tags.map((tagName, index) => (
                            <span key={index} className={tag}>
                                {tagName}
                            </span>
                        ))}
                    </div>
                    <hr />
                    <div className={relatedArticles}>
                        <a href="www.bendemann.com">This one</a>
                    </div>
                    <hr />
                    <About text="hello">Hello</About>
                </div>
                <div className={post}>{children}</div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                tags
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
