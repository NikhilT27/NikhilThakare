import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

import Image from "./image"
import {
  Button,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@material-ui/core"

import GitHubIcon from "@material-ui/icons/GitHub"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {},
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
        <Grid item>
          <Grid container direction="column">
            <Typography variant="h4">{data.strapiProjects.Title}</Typography>
            <Typography variant="h4">
              {data.strapiProjects.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-evenly" align="center">
            {data.strapiProjects.project.map(item => {
              return (
                <Grid item xs={3} id={item.id}>
                  <Card elevation={0}>
                    <CardContent>
                      <Typography variant="h5">{item.title}</Typography>
                      <Typography
                        variant="body"
                        color="textSecondary"
                        component="p"
                      >
                        {item.description}
                      </Typography>
                      <Img fluid={item.image.childImageSharp.fluid} />
                      <IconButton target="_blank" href={item.github_link}>
                        <GitHubIcon />
                      </IconButton>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Projects
