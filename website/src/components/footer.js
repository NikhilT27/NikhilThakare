import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from "react-markdown"

import { Button, Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    paddingTop: 100,
    backgroundColor: "red",
  },
}))

const Footer = () => {
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
    <Paper className={classes.root}>
      <Grid container justify="space-evenly">
        <Grid item>
          <Grid container direction="column">
            <Typography variant="h2">Footer</Typography>
            <div>
              <ReactMarkdown source={data.strapiIntroductions.description} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Footer
