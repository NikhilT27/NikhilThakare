import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

import { Grid, Paper, Typography, LinearProgress, Box } from "@material-ui/core"

import BrushIcon from "@material-ui/icons/Brush"
import KeyboardIcon from "@material-ui/icons/Keyboard"
import { makeStyles } from "@material-ui/core/styles"
import Tooltip from "@material-ui/core/Tooltip"

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,

    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 20,
    paddingRight: 20,

    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      paddingBottom: 20,
    },
    background: "gold",
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
    background: "#C2C4D4",
  },
  image: {
    width: "500px",
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
      skillImage: file(relativePath: { eq: "horn.png" }) {
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
      <Grid container alignItems="center" justify="space-around">
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

                          <Typography variant="body1">{item.title}</Typography>
                        </Grid>
                      </div>
                      <div>
                        <Typography variant="body1">{item.level} %</Typography>
                      </div>
                    </Grid>
                  </>
                )
              })}
            </Box>
          </Grid>
        </Grid>

        <Grid item>
          <Tooltip
            title={
              <Typography variant="body1">
                One of my Drawings, for more do check ART section
              </Typography>
            }
            arrow
          >
            <Box className={classes.image}>
              <Img fluid={data.skillImage.childImageSharp.fluid} />
            </Box>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default DisplaySkills
