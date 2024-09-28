import * as React from "react";
import { graphql, Link, navigate } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Fonts from "../../components/fonts";

import {
    post,
    postContainer,
    sideBar,
    tags,
    tag,
    relatedArticles,
} from "./blob-page.module.css";
import About from "../../components/about";
import ArticleHeader from "../../components/article-header";

const BlogPost = ({ data, children }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <ArticleHeader
                title={data.mdx.frontmatter.title}
                date={data.mdx.frontmatter.date}
            ></ArticleHeader>
            <div className={postContainer}>
                <div className={sideBar}>
                    <hr />
                    <h3>Tags</h3>
                    <div className={tags}>
                        {data.mdx.frontmatter.tags.map((tagName, index) => (
                            <span
                                key={index}
                                className={tag}
                                onClick={() => navigate(`/tags/${tagName}`)}
                            >
                                {tagName}
                            </span>
                        ))}
                    </div>
                    <Link to="/tags">All Tags</Link>
                    {data.mdx.frontmatter.related &&
                        data.mdx.frontmatter.related.length > 0 && (
                            <>
                                <hr />
                                <h3>Related</h3>
                                <div className={relatedArticles}>
                                    {data.mdx.frontmatter.related.map(
                                        (related, index) => (
                                            <div
                                                key={index}
                                                onClick={() =>
                                                    navigate(
                                                        `/blog/${related.slug}`
                                                    )
                                                }
                                            >
                                                {related.title}
                                            </div>
                                        )
                                    )}
                                </div>
                            </>
                        )}
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
                related {
                    slug
                    title
                }
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
