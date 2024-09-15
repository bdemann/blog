import {dirname} from 'path'
import remarkGfm from 'remark-gfm'
import {fileURLToPath} from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  siteMetadata: {
    title: `Benjamin DeMann's Blog`,
    siteUrl: `https://www.bendemann.com`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
          ],
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {name: 'blog', path: `${__dirname}/blog`}
    },
  ],
};

export default config;
