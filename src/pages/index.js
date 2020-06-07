import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  let textInput = React.createRef()

  function handleClick() {
    window.alert(`Hello ${textInput.current.value}!`)
  }
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <wired-input placeholder="Your name" ref={textInput} />
      <wired-button onClick={handleClick}>Submit</wired-button>
      <wired-link elevation="3" href="/more.html" target="_blank">
        Elevation
      </wired-link>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}
export default IndexPage
