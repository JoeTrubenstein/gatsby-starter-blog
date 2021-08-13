import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
          `}
        >
          A GatsbyJS starter blog
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: 10px;
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <img
                src={node.frontmatter.featuredimage}
                alt="vaporwave aesthetic japanese cities at night"
                css={css`
                  object-fit: cover;
                  height: 200px;
                  width: 100%;
                `}
              />
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredimage
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
