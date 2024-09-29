import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Seo from "../../components/seo";
import Layout from "../../components/layout";
import Fonts from "../../components/fonts";
import { pageHeader } from "../../styles/common.module.css";
import { galleryContainer } from "./index.module.css";

const GalleryPage = ({ data }) => {
    const items = data.allMdx.nodes;

    return (
        <Layout pageTitle="Gallery">
            <h1 className={pageHeader}>Gallery</h1>
            <div className={galleryContainer}>
                {items.map((item) => {
                    const image = getImage(item.frontmatter.image);
                    return (
                        <div key={item.id}>
                            <Link to={`/gallery/${item.frontmatter.slug}`}>
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
                    slug
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
    }
`;

export default GalleryPage;
