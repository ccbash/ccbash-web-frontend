require("dotenv").config({
  path: `.env`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://cms.ccbash.de:1337",
        contentTypes: ["article", "category", "writer", "service"],
        singleTypes: ["homepage", "global", "dsgvo", "legal"],
        queryLimit: 1000,
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
};
