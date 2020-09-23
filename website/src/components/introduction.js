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
    paddingTop: 100,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
    },
    background: "transparent",
  },
  title: {
    margin: 20,
  },
  image: {
    width: "400px",
    marginBottom: `1.45rem`,
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  backg: {
    width: "100%",
    backgroundPosition: "bottom center",
    backgroundRepeat: "repeat-y",
    backgroundSize: "cover",
    background: "#D8D8D8",
  },
}))

const Introduction = () => {
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

      placeholderImage: file(relativePath: { eq: "nik.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backgroundImage: file(relativePath: { eq: "back.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <BackgroundImage
        Tag="section"
        className={classes.backg}
        fluid={data.backgroundImage.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <Paper elevation={0} className={classes.root} id="Introduction">
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
                      {data.strapiIntroductions.name}
                    </Typography>
                    <Typography variant="h4">
                      निखिल ठाकरे ನಿಖಿಲ್ ಠಾಕರೆ
                    </Typography>
                    <Box display={{ xs: "inline", sm: "none" }}>
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                      >
                        <IconButton target="_blank" href={github}>
                          <GitHubIcon />
                        </IconButton>
                        <IconButton target="_blank" href={linkedin}>
                          <LinkedInIcon />
                        </IconButton>
                        <IconButton target="_blank" href={instagram}>
                          <InstagramIcon />
                        </IconButton>
                      </Grid>
                    </Box>
                    <animated.div style={travelFromLeft}>
                      <div>
                        {/* <Typography>
                          {data.strapiIntroductions.description}
                        </Typography> */}

                        <Typical
                          steps={[
                            "I am Developer",
                            1000,
                            "I am Artist",
                            1000,
                            "I am Critical Thinker",
                            1000,
                            "I am Problem Solver",
                            1000,
                            "I am UI Designer",
                            1000,
                            "I am Graphic Designer",
                            1000,
                            "I am Bad Singer",
                            1000,
                          ]}
                          loop={Infinity}
                          wrapper="h4"
                        />
                      </div>
                    </animated.div>
                  </div>
                </animated.div>
              </Grid>
            </Grid>
            <Grid item>
              <Box className={classes.image}>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </BackgroundImage>
    </>
  )
}

export default Introduction
