import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"


export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: 10px;
      padding-top: 10px;
    `}
  >
  <div css={css`
  `}>
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: 10px;
          display: inline-block;
          font-style: normal;
        `}
      >
        Pandas Eating Lots
      </h3>
    </Link>
    <Link
      to={`/about/`}
      css={css`
      float:right;
      `}
    >
      About
    </Link>
    </div>
    {children}
  </div>
)