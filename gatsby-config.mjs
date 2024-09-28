import {dirname} from 'path'
import remarkGfm from 'remark-gfm'
import {fileURLToPath} from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  siteMetadata: {
    title: `The Benjamin DeMann Blog`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'The Benjamin DeMann Blog',
        short_name: 'DeBlog',
        start_url: '/',
        background_color: '#171717',
        theme_color: '#171717',
        display: 'standalone',
        icon: 'src/images/book.png',
        icons: [
          {
            src: `src/images/book-maskable.png`,
            sizes: `2880x2880`,
            type: `image/png`,
            purpose: `maskable`,
          },
        ],
        crossOrigin: `use-credentials`,
      },
    },
  ],
};

export default config;
