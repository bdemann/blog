/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Benjamin DeMann's Blog`,
        siteUrl: `https://www.bendemann.com`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: { name: "blog", path: `${__dirname}/blog` },
        },
    ],
};
