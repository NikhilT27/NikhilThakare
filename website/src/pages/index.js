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
import Footer from "../components/footer"

import Spring from "../components/spring"

import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Layout>
        <SEO title="Home" />

        {/* <Spring /> */}
        <Introduction />
        <DisplaySkills />
        <DisplayEducations />
        <Experiences />
        <Projects />
        <DisplayMyAwards />
        {/* <DisplayMystories /> */}

        <Footer />
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
