import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Fonts from "../components/fonts";
import { pageHeader } from "../styles/common.module.css";

const GalleryPage = ({ data }) => {
    const items = data.allMdx.nodes;

    return (
        <Layout pageTitle="Gallery">
            <h1 className={pageHeader}>Gallery</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "10px",
                }}
            >
                {items.map((item) => {
                    const image = getImage(
                        item.frontmatter.image.childImageSharp.gatsbyImageData
                    );
                    return (
                        <div key={item.id}>
                            <Link to={`/gallery/${item.slug}`}>
                                <GatsbyImage
                                    image={image}
                                    alt={item.frontmatter.shortDescription}
                                />
                            </Link>
                            <h2>{item.frontmatter.title}</h2>
                            <p>{item.frontmatter.shortDescription}</p>
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
        allMdx(
            filter: { internal: { contentFilePath: { regex: "/gallery/" } } }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    shortDescription
                    longDescription

                    slug
                    image {
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
        }
    }
`;

export default GalleryPage;
