import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Drawings = () => (
  <Layout>
    <SEO title="Drawings" />
    <h1>Hi from the Drawings</h1>
    <p>Welcome to Drawing</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Drawings
