import * as React from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Fonts from "../components/fonts";
import { pageHeader } from "../styles/common.module.css";

const GalleryPage = ({ data }) => {
    const images = data.allFile.nodes;
    return (
        <Layout pageTitle="About Me">
            <h1 className={pageHeader}>Gallery</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "10px",
                }}
            >
                {images.map((image) => {
                    const img = getImage(image.childImageSharp.gatsbyImageData);
                    return (
                        <div key={image.id}>
                            <a
                                href={img.images.fallback.src}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GatsbyImage image={img} alt={image.name} />
                            </a>
                            <p>{image.name}</p>{" "}
                            {/* You can replace this with a description if needed */}
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
};

export const Head = () => (
    <>
        <Seo title="About"></Seo>
        <Fonts></Fonts>
    </>
);

export const query = graphql`
    query {
        allFile(
            filter: {
                sourceInstanceName: { eq: "gallery" }
                extension: { regex: "/(jpg|jpeg|png|gif)/" }
            }
        ) {
            nodes {
                id
                name
                childImageSharp {
                    gatsbyImageData(
                        width: 300
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                    )
                }
            }
        }
    }
`;

export default GalleryPage;
