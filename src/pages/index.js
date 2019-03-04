import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>City Pop and GatsbyJS</h1>
    <div>
      <img
        src="https://source.unsplash.com/layMbSJ3YOE/"
        alt="Tokyo by Jezael Melgoza on Unsplash"
      />
    </div>
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