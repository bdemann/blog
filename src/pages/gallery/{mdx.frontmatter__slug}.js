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
                <div className={textContainer}>
                    <div className={imageContainer}>
                        <GatsbyImage
                            image={image}
                            alt={frontmatter.description}
                        />
                        <h2>{frontmatter.description}</h2>
                        Made with
                        <ul>
                            {frontmatter.tools?.map((tool) => (
                                <li>{tool}</li>
                            ))}
                        </ul>
                        {frontmatter.date}
                    </div>
                    {children}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String!) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                description
                tools
                date(formatString: "MMMM D, YYYY")
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
