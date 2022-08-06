import * as React from "react"
import type { HeadFC } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  justifyContent: "center"
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  textAlign: "center"
}
const headingAccentStyles = {
  color: "#663399",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div>
        <h1 style={headingStyles}>
          Blich Studio
        </h1>
        <h2>
          <span style={headingAccentStyles}>We are making games!</span>
        </h2>
      </div>
      
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
