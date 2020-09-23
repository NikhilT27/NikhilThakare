import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  Grid,
  Paper,
  Typography,
  Box,
  Hidden,
  Divider,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import SchoolIcon from "@material-ui/icons/School"

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
    background: "#FAFAFA",

    // paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.down("sm")]: {
      // paddingTop: 20,
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
    background: "rgb(34,121,0)",
  },
  education: {
    marginLeft: "30px",
    marginRight: "30px",
    borderRadius: "30px",
    padding: "20px",
    color: "black",
    textTransform: "uppercase",

    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.2)",
      // background: "rgba(0,0,0, 0.1)",
      // borderStyle: "solid",
    },
  },
}))

const DisplayEducation = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      allStrapiEducations(sort: { order: DESC, fields: strapiId }) {
        nodes {
          strapiId
          degree_name
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
    <Paper id="Educations" elevation={0} className={classes.root} square>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e8e1d5"
          fill-opacity="1"
          d="M0,128L288,96L576,96L864,192L1152,224L1440,64L1440,0L1152,0L864,0L576,0L288,0L0,0Z"
        ></path>

        <path
          fill="#1c1100"
          fill-opacity="1"
          d="M0,32L80,42.7C160,53,320,75,480,96C640,117,800,139,960,122.7C1120,107,1280,53,1360,26.7L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <Grid container direction="column" justify="space-evenly" align="center">
        <Grid item>
          <Grid container direction="column">
            <Typography variant="h4">Education</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid>
            <Box display={{ xs: "none", md: "inline" }}>
              <Timeline align="alternate" className={classes.timeline}>
                {data.allStrapiEducations.nodes.map(item => {
                  return (
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineConnector color="secondary" />
                        <TimelineDot color="secondary">
                          <SchoolIcon style={{ fontSize: "30px" }} />
                        </TimelineDot>
                        <TimelineConnector color="secondary" />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Box className={classes.education}>
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
                                  {item.degree_name}
                                </Typography>
                                <Typography variant="body2">
                                  {item.college}
                                </Typography>
                                <Typography variant="h6">
                                  {item.marks}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Box>
                      </TimelineContent>
                    </TimelineItem>
                  )
                })}
              </Timeline>
            </Box>
            <Box
              display={{ xs: "inline", md: "none" }}
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
            >
              {data.allStrapiEducations.nodes.map(item => {
                return (
                  <Box
                    style={{
                      paddingTop: "20px",
                      paddingBottom: "20px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <Grid container justify="space-around" alignItems="center">
                      <Grid item>
                        <Box>
                          <SchoolIcon style={{ fontSize: 60 }} />
                        </Box>
                      </Grid>
                      <Grid item>
                        <Box style={{ width: "300px" }}>
                          <Typography variant="h6">
                            {item.degree_name}
                          </Typography>
                          <Typography variant="body1">
                            {item.college}
                          </Typography>
                          <Typography variant="h6">{item.marks}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                )
              })}
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e8e1d5"
          fill-opacity="1"
          d="M0,128L288,96L576,96L864,192L1152,224L1440,64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
        ></path>
        <path
          fill="#fc0000"
          fill-opacity="1"
          d="M0,320L720,224L1440,256L1440,320L720,320L0,320Z"
        ></path>
      </svg>
    </Paper>
  )
}

export default DisplayEducation
