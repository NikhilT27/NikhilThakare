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
  IconButton,
  Box,
  CardMedia,
} from "@material-ui/core"

import GitHubIcon from "@material-ui/icons/GitHub"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
  },
  image: {
    width: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  content: {
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  project: {
    padding: 30,
    [theme.breakpoints.down("sm")]: {
      padding: 10,
    },
  },
}))

const Projects = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      strapiProjects {
        Title
        description
        project {
          id
          title
          description
          github_link
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Paper elevation={0} className={classes.root} square>
      <Grid container direction="column" justify="space-evenly" align="center">
        <Typography variant="h4">{data.strapiProjects.Title}</Typography>
        <Typography variant="body1">
          {data.strapiProjects.description}
        </Typography>
        {data.strapiProjects.project.map(item => {
          return (
            <Box className={classes.project}>
              <Grid container justify="center" alignItems="center">
                {item.id % 2 != 0 ? (
                  <Box className={classes.image}>
                    <Img fluid={item.image.childImageSharp.fluid} />
                  </Box>
                ) : (
                  <div></div>
                )}
                <Grid item>
                  <Box className={classes.content}>
                    <Grid container justify="center" alignItems="center">
                      {item.id % 2 != 0 ? (
                        <Grid item sm={3} xs={12}>
                          <Typography
                            variant="h2"
                            style={{ fontWeight: "bold" }}
                          >
                            {item.id}
                          </Typography>
                        </Grid>
                      ) : (
                        <div></div>
                      )}
                      <Grid item sm={9} xs={12}>
                        <Typography variant="h5" style={{ fontWeight: "bold" }}>
                          {item.title}
                        </Typography>
                      </Grid>
                      {item.id % 2 == 0 ? (
                        <Grid item sm={3} xs={12}>
                          <Typography
                            variant="h2"
                            style={{ fontWeight: "bold" }}
                          >
                            {item.id}
                          </Typography>
                        </Grid>
                      ) : (
                        <div></div>
                      )}
                    </Grid>

                    <Typography>{item.description}</Typography>
                  </Box>
                </Grid>
                {item.id % 2 == 0 ? (
                  <Box className={classes.image}>
                    <Img fluid={item.image.childImageSharp.fluid} />
                  </Box>
                ) : (
                  <div></div>
                )}
              </Grid>
            </Box>
          )
        })}
      </Grid>
    </Paper>
  )
}

export default Projects
