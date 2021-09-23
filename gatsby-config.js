/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options:{
        objects: ['Price', 'Product', 'Sku'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downoaldFiles: true
      }
    }
  ],
  siteMetadata: {
    title: "Lovely Store",
    url: "https://lovelyfake-store.netlify.app",
    description: "Buy in Lovely Store a Fake Store made with Gatsby"
  }
}
