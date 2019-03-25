import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: 10px;
          padding-top: 20px;
        `}
      >
        <Link to={`/`}>
          <h3
            css={css`
              margin-bottom: 10px;
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/my-files/`}
          css={css`
            float: right;
            margin-right: 10px;
          `}
        >
          My Files
        </Link>
        <Link
          to={`/about/`}
          css={css`
            float: right;
            margin-right: 10px;
          `}
        >
          About
        </Link>
        <Link
          to={`/api/`}
          css={css`
            float: right;
            margin-right: 10px;
          `}
        >
          API Demo
        </Link>
        {children}
      </div>
    )}
  />
)