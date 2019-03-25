module.exports = {
    siteMetadata: {
      title: `JAMstack Soundtrack`,
    },
    plugins: [
      {
        resolve: "gatsby-source-graphql",
        options: {
          typeName: "PokeAPI",
          fieldName: "pokemonApi",
          url: "https://graphql-pokemon.now.sh"
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  }