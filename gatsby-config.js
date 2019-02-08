module.exports = {
  siteMetadata: {
    title: `strandrover – concept, branding, design, code. Berlin and Frankfurt.`,
    description: `passionate design/code bureau. design, concept, branding seamlessly integrated with edge web technology implementation.`,
    author: `@nilsborgboehmer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-cockpit-generic',
      options: {
        host: `${process.env.COCKPIT_HOST}`,
        accessToken: `${process.env.COCKPIT_ACCESS_TOKEN}`,
        uploadPath: '/storage/uploads',
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
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/images/favicon.png',

        // WebApp Manifest Configuration
        appName: 'strandrover', // Inferred with your package.json
        appDescription: null,
        developerName: '@nilsborgboehmer',
        developerURL: 'https://strandrover.com',
        dir: 'auto',
        lang: 'de-DE',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: false,
          windows: false,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
