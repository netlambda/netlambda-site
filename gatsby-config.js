module.exports = {
  siteMetadata: {
    title: `NetLambda Site`,
    description: `NetLambda Site`,
    author: `haigiang0591@gmail.com`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyTMpIteiGkyNhA1`,
        tables: [
          {
            baseId: `appaoNF2oc47ppVVh`,
            tableName: `CMS`,
            tableView: `published`,
            // mapping: { Body: 'text/markdown' },
            // tableLinks: [`Pages`],
          },
          // {
          //   baseId: `appN0O40W9X0mzbsl`,
          //   tableName: `Pages`,
          //   tableView: `All`,
          //   mapping: { Body: 'text/markdown' },
          //   tableLinks: [`Section`],
          // },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
  ],
}
