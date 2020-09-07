import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

import {
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core"
import { useSpring, animated } from "react-spring"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    paddingTop: 100,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
    },
    paddingBottom: 50,
    backgroundColor: "yellow",
  },
  image: {
    width: "400px",
    marginBottom: `1.45rem`,
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
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
        id
        Name
        description
      }
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Paper elevation={0} className={classes.root}>
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
              <Typography variant="h4">
                {data.strapiIntroductions.Name}
              </Typography>
              <animated.div style={travelFromLeft}>
                <div>
                  <ReactMarkdown
                    source={data.strapiIntroductions.description}
                  />
                </div>
              </animated.div>
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
  )
}

export default Introduction
