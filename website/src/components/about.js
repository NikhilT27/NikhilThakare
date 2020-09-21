import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Typical from "react-typical"
import { linkedin, instagram, github } from "./staticData"

import BackgroundImage from "gatsby-background-image"
import {
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core"
import { useSpring, animated } from "react-spring"

import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    paddingTop: 100,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
    },
    paddingBottom: 50,
    // background: "#D8D8D8",
    background: "transparent",
  },
  title: {
    margin: 20,
  },
}))

const About = () => {
  const classes = useStyles()

  const nameAnimation = useSpring({ opacity: 1, from: { opacity: 0 } })
  const travelFromLeft = useSpring({
    to: [{ transform: "translate3d(0,0px,0)" }],
    from: { transform: "translate3d(-500px,0,0)" },
    delay: 500,
  })

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
        <Grid
          container
          justify="space-evenly"
          alignItems="center"
          xs="12"
          sm="auto"
        >
          <Grid item>
            <Grid container direction="column">
              <animated.div style={nameAnimation}>
                <div className={classes.title}>
                  <Typography variant="h4" style={{ fontWeight: "bold" }}>
                    About
                  </Typography>
                  <Typography variant="h4">
                    {data.strapiIntroductions.description}
                  </Typography>
                </div>
              </animated.div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default About
