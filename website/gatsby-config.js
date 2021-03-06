module.exports = {
  siteMetadata: {
    title: `Nikhil Thakare`,
    description: `Nikhil Thakare's Portfolio website`,
    author: `@NikhilT27`,
    twitterUsername: "@nikhilt22781479",
    image: "/src/images/twitter-img.png",
    website: `https://nikhilthakare.netlify.app`,
  },
  plugins: [
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
        name: `nikhil-thakare-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#FFD700`,
        theme_color: `#FFD700`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://strapi-mongodb-2712.herokuapp.com",
        // apiURL: "http://localhost:1337",
        contentTypes: [
          "Awards",
          "Drawings",
          "Educations",
          "Experiences",
          "Introductions",
          "Projects",
          "Skills",
        ],
        queryLimit: 5000,
      },
    },

    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {},
      },
    },
    `custom-mui-theme`,
  ],
}
