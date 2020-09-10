import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

import {
  Button,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Box,
} from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"

import Rating from "@material-ui/lab/Rating"
import BrushIcon from "@material-ui/icons/Brush"
import KeyboardIcon from "@material-ui/icons/Keyboard"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,

    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,

    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      paddingBottom: 20,
    },
    background: " gold",
    // background: "transparent",
  },
  skillBox: {
    minWidth: "400px",
    margin: 20,
    [theme.breakpoints.down("xs")]: {
      minWidth: "300px",
      margin: 10,
    },
  },
  contentBox: {
    maxWidth: "500px",
    margin: 20,
    [theme.breakpoints.down("md")]: {
      maxWidth: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
      margin: 10,
    },
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    color: "black",
  },
  backg: {
    width: "100%",
    backgroundPosition: "bottom center",
    backgroundRepeat: "repeat-y",
    backgroundSize: "cover",
    background: "gold",
  },
  image: {
    width: "400px",
    marginBottom: `1.45rem`,
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
}))

const DisplaySkills = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    {
      strapiSkills {
        Title
        skill_tagline
        description
        skill {
          id
          title
          experience
          level
          type
        }
      }
      backgroundImage: file(relativePath: { eq: "window.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      skillImage: file(relativePath: { eq: "skillHorn.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Paper elevation={0} className={classes.root} square>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h4" className={classes.title}>
            {data.strapiSkills.Title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <ReactMarkdown source={data.strapiSkills.skill_tagline} />
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center" spacing={4}>
        <Grid item>
          <Grid container justify="space-evenly" alignItems="center">
            <Box>
              {data.strapiSkills.skill.map(item => {
                return (
                  <>
                    <Grid id={item.id} className={classes.skillBox}>
                      <div>
                        <LinearProgress
                          variant="determinate"
                          value={item.level}
                          color="secondary"
                        />
                      </div>
                    </Grid>
                    <Grid container justify="space-between">
                      <div>
                        <Grid container>
                          {item.type === "design" ? (
                            <BrushIcon />
                          ) : (
                            <KeyboardIcon />
                          )}

                          <Typography>{item.title}</Typography>
                        </Grid>
                      </div>
                      <div>
                        <Typography>{item.level} %</Typography>
                      </div>
                    </Grid>
                  </>
                )
              })}
            </Box>
          </Grid>
        </Grid>

        <Grid item>
          <Box className={classes.contentBox}>
            <Typography variant="body1">
              {/* {data.strapiSkills.description} */}
              <Box className={classes.image}>
                <Img fluid={data.skillImage.childImageSharp.fluid} />
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default DisplaySkills
