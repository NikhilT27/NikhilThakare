import React from "react"

import CssBaseline from "@material-ui/core/CssBaseline"
import Layout from "../components/layout"
import Introduction from "../components/introduction"
import DisplaySkills from "../components/displaySkills"
import DisplayEducations from "../components/displayEducations"
import DisplayMyAwards from "../components/displayAwards"
import Projects from "../components/projects"
import Experiences from "../components/experiences"
import Footer from "../components/footer"
import SocialMedia from "../components/socialMedia"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Layout>
        <SEO title="Home" description="Welcome to Nikhil's portfolio" />
        {/* <Spring /> */}
        <Introduction />
        <DisplayEducations />
        <DisplaySkills />
        <Experiences />
        <Projects />
        <DisplayMyAwards />
        <Footer />
      </Layout>
      <SocialMedia />
    </React.Fragment>
  )
}

export default IndexPage
