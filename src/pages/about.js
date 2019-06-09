import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>The power of React and GraphQl</p>
    <p>and the aesthetics of Vaporwave and City Pop</p>
    <p>What's not to love?</p>
    <img
      src="https://source.unsplash.com/cv3T6MG36DE/"
      alt="Tokyo by Jezael Melgola on Unsplash"
      css={css`
        object-fit: cover;
        height: 400px;
        width: 100%;
      `}
    />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
