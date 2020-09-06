import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Layout from "../components/layout"
import Introduction from "../components/introduction"
import DisplaySkills from "../components/displaySkills"
import DisplayEducations from "../components/displayEducations"
import DisplayMystories from "../components/displayMystories"
import DisplayMyAwards from "../components/displayAwards"
import Projects from "../components/projects"
import Experiences from "../components/experiences"

import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Layout>
        <SEO title="Home" />
        <Introduction />
        <DisplaySkills />
        <DisplayEducations />
        <DisplayMystories />
        <DisplayMyAwards />
        <Projects />
        <Experiences />
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
