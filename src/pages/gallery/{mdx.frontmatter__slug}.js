import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import { pageHeader } from "../../styles/common.module.css";
import {
    imageContainer,
    container,
    textContainer,
} from "./gallery-page.module.css";
import Seo from "../../components/seo";
import Fonts from "../../components/fonts";

const GalleryItem = ({ data, children }) => {
    const { frontmatter } = data.mdx;
    const image = getImage(frontmatter.image);

    return (
        <Layout>
            <h1 className={pageHeader}>{frontmatter.title}</h1>
            <div className={container}>
                <div className={imageContainer}>
                    <GatsbyImage
                        image={image}
                        alt={frontmatter.shortDescription}
                    />
                    <p>{frontmatter.longDescription}</p>
                </div>
                <div className={textContainer}>{children}</div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String!) {
        mdx(id: { eq: $id }) {
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
