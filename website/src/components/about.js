import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Grid, Paper, Box, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    paddingTop: 100,
    paddingBottom: 100,

    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      paddingBottom: 50,
    },

    background: "gold",
  },
  title: {
    margin: 20,
  },
  content: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
}))

const About = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      strapiIntroductions {
        name
        description
      }
    }
  `)

  return (
    <>
      <Paper elevation={0} className={classes.root} id="About">
        <Grid container direction="column" justify="center" alignItems="center">
          <div className={classes.title}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              About Me
            </Typography>
          </div>
          <Box className={classes.content}>
            <Typography variant="body1" style={{ textAlign: "justify" }}>
              {data.strapiIntroductions.description}
            </Typography>
          </Box>
        </Grid>
      </Paper>
    </>
  )
}

export default About
