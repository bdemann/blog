import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { pageHeader } from "../styles/common.module.css";
import { imageContainer } from "./gallery-item.module.css";
import Seo from "../components/seo";
import Fonts from "../components/fonts";
import { MDXRenderer } from "gatsby-plugin-mdx";

const GalleryItem = ({ data }) => {
    const { frontmatter } = data.mdx;
    const image = getImage(frontmatter.image);

    return (
        <Layout>
            <h1 className={pageHeader}>{frontmatter.title}</h1>
            <div className={imageContainer}>
                <GatsbyImage image={image} alt={frontmatter.shortDescription} />
                <p>{frontmatter.longDescription}</p>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query ($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                shortDescription
                longDescription
                image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;

export const Head = ({ data }) => (
    <>
        <Seo title={data.mdx.frontmatter.title}></Seo>
        <Fonts></Fonts>
    </>
);

export default GalleryItem;
