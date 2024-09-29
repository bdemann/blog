import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const GalleryItem = ({ data }) => {
    const { frontmatter } = data.mdx;
    const image = getImage(frontmatter.image.childImageSharp.gatsbyImageData);

    return (
        <div>
            <h1>{frontmatter.title}</h1>
            <GatsbyImage image={image} alt={frontmatter.shortDescription} />
            <p>{frontmatter.longDescription}</p>
        </div>
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
