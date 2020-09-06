import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from "react-markdown"

import Image from "../components/image"
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

const DisplaySkills = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      strapiSkills {
        Title
        skill_tagline
        skill {
          id
          title
          description
          experience
          level
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
            <Typography variant="h3">{data.strapiSkills.Title}</Typography>
            <Typography variant="body">
              {data.strapiSkills.skill_tagline}
            </Typography>
          </Grid>
          <Grid container justify="space-evenly" spacing={2}>
            {data.strapiSkills.skill.map(item => {
              return (
                <Grid item>
                  <Paper
                    style={{
                      width: "300px",
                      height: "200px",
                      marginBottom: `1.45rem`,
                    }}
                  >
                    <Typography>{item.title}</Typography>
                    <Typography>{item.description}</Typography>
                    <Typography>{item.experience}</Typography>
                    <Typography>{item.title}</Typography>
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

export default DisplaySkills
