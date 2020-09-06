import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from "react-markdown"

import Image from "../components/image"
import { Button, Grid, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 0,
  },
}))

const Introduction = () => {
  const classes = useStyles()

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
    <Paper elevation={0}>
      <Grid container justify="space-evenly">
        <Grid item>
          <Grid container direction="column">
            <h1>{data.strapiIntroductions.Name}</h1>
            <div>
              <ReactMarkdown source={data.strapiIntroductions.description} />
            </div>
          </Grid>
        </Grid>
        <Grid item>
          <div
            style={{
              width: "300px",
              maxWidth: `300px`,
              marginBottom: `1.45rem`,
            }}
          >
            <Image />
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Introduction
