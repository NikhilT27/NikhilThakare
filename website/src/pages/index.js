import React from "react"

import Layout from "../components/layout"
import Introduction from "../components/introduction"
import DisplaySkills from "../components/displaySkills"
import DisplayEducations from "../components/displayEducations"
import DisplayMystories from "../components/displayMystories"

import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Introduction />
      <DisplaySkills />
      <DisplayEducations />
      <DisplayMystories />
    </Layout>
  )
}

export default IndexPage
