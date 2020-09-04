import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from "react-markdown"

import Image from "../components/image"
import Button from "@material-ui/core/Button"

const Introduction = () => {
  const data = useStaticQuery(graphql`
    {
      strapiIntroductions {
        id
        Name
        description
      }
    }
  `)
  return (
    <>
      <h1>{data.strapiIntroductions.Name}</h1>
      <div>
        <ReactMarkdown source={data.strapiIntroductions.description} />
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <Button color="secondary" variant="contained">
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </Button>
    </>
  )
}

export default Introduction
