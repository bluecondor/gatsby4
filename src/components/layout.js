import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rythm } from "../utils/typography"

export default ({ children }) => (
    <div
        css={css`
            margin: 0 auto;
            max-width: 700px;
            padding: ${rythm(2)};
            padding-top: ${rythm(1.5)};
        `}
    >
        <Link to={`/`}>
            <h3>
                Pandas Eating Lots
            </h3>
        </Link>
        <Link to={/about/}>
            About
        </Link>
        {children}
    </div>
)