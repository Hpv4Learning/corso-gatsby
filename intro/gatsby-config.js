/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Introduzione a Gatsby",
    description: "La vera sfida è scrivere giusto Gatsby",
    author: "@mariocemento",
    type: {
      category: "SSR",
      level: "intermediate",
      score: 7,
    },
    dummyData: ["item 1", "item 2"],
    otherCourses: [
      {
        category: "React",
        level: "junior",
        score: 7,
      },
      {
        category: "Javascript",
        level: "basic",
        score: 7,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
