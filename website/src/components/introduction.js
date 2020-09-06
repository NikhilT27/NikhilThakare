import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from "react-markdown"

import Image from "../components/image"
import { Button, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#C2D2C1",
    paddingTop: 100,
    margin: -32,
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
    <>
      <div className={classes.root}>
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
      </div>
    </>
  )
}

export default Introduction
