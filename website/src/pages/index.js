import React from "react"

import Layout from "../components/layout"
import Introduction from "../components/introduction"

import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Introduction />
    </Layout>
  )
}

export default IndexPage
