import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Grid, Paper, Typography, Box, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab"
import BackgroundImage from "gatsby-background-image"

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "#fcf7cc",
    backgroundColor: "transparent",

    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      paddingBottom: 20,
    },
  },
  timeline: {
    width: "800px",
    marginTop: 20,
    marginBottom: 20,

    [theme.breakpoints.down("sm")]: {
      width: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      padding: 0,
    },
  },
  backg: {
    width: "100%",
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    background: "#fcf7cc",
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
      backgroundImage: file(relativePath: { eq: "leftPlant.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className={classes.backg}
      fluid={data.backgroundImage.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <Paper elevation={0} className={classes.root} square>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          align="center"
        >
          <Grid item>
            <Grid container direction="column">
              <Typography variant="h4">
                {data.strapiEducations.Title}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Timeline align="alternate" className={classes.timeline}>
              {data.strapiEducations.education.map(item => {
                return (
                  <TimelineItem>
                    <Hidden xsDown>
                      <TimelineSeparator>
                        <TimelineConnector color="secondary" />
                        <TimelineDot color="secondary" />
                        <TimelineConnector color="secondary" />
                      </TimelineSeparator>
                    </Hidden>
                    <TimelineContent>
                      <Box>
                        <Grid
                          container
                          justify="space-evenly"
                          alignItems="center"
                        >
                          <Grid item>
                            <Grid
                              container
                              direction="column"
                              justify="center"
                              alignItems="center"
                            >
                              <Typography variant="h6">
                                {item.degreeName}
                              </Typography>
                              <Typography
                                variant="body"
                                color="textSecondary"
                                component="p"
                              >
                                {item.college}
                              </Typography>
                              <Typography variant="h6">{item.marks}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                )
              })}
            </Timeline>
          </Grid>
        </Grid>
      </Paper>
    </BackgroundImage>
  )
}

export default DisplayEducation
