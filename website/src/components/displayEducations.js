import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from "react-markdown"

import Image from "./image"
import { Button, Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#C2D2C1",
    paddingTop: 100,
    margin: -32,
  },
}))

const DisplayEducation = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      strapiEducations {
        Title
        strapiId
        education {
          id
          degreeName
          college
          marks
        }
      }
    }
  `)

  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          xs="12"
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h3">{data.strapiEducations.Title}</Typography>
          </Grid>
          <Grid container justify="space-evenly" spacing={2}>
            {data.strapiEducations.education.map(item => {
              return (
                <Grid item>
                  <Paper
                    style={{
                      width: "300px",
                      height: "200px",
                      marginBottom: `1.45rem`,
                    }}
                  >
                    <Typography>{item.degreeName}</Typography>
                    <Typography>{item.college}</Typography>
                    <Typography>{item.marks}</Typography>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default DisplayEducation
