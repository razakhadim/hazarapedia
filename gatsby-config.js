/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: 'Hazarapedia, the online Hazara encyclopedia',
    description: 'Hazarapedia is a free online encyclopedia for the Hazara people. It is a community-driven encyclopedia that is open to all people who want to contribute to the encyclopedia.',
    siteUrl: `https://www.hazarapedia.org/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'g1OF76qVr9JCOaMZ0rfMNwtt',
        homeSlug: 'home',
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
          ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://www.hazarapedia.org./',
          site_name: 'Hazarapedia, the online Hazara Encyclopedia',
        },
        twitter: {
          handle: '@hazarapedia',
          site: '@site',
          cardType: 'summary_large_image',
        },
      },
    },
  ],
}
