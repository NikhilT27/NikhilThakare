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
} from "@material-ui/core"

import GitHubIcon from "@material-ui/icons/GitHub"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const Experiences = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      allStrapiExperiences {
        totalCount
        edges {
          node {
            Title
            Company
            Description
            date
            strapiId
            Details {
              id
              brief
            }
          }
        }
      }
    }
  `)

  console.log(data.allStrapiExperiences.edges)
  return (
    <Paper elevation={1} className={classes.root} square>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Grid direction="column" justify="center" alignItems="center">
            <Typography variant="h3">Title</Typography>
            <Typography>Description</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container>
            {data.allStrapiExperiences.edges.map(({ node }) => {
              return (
                <Paper elevation={4}>
                  <Grid item id={node.strapiId}>
                    <Grid direction="column" container>
                      <Grid item>
                        <Typography variant="h6">{node.Title}</Typography>
                        <Typography variant="body">{node.Company}</Typography>
                        <Typography variant="body">
                          {node.Description}
                        </Typography>
                        <Typography variant="body">{node.date}</Typography>
                      </Grid>
                      <Grid item>
                        {node.Details.map(({ id, brief }) => {
                          return (
                            <Typography id={id} variant="body">
                              {brief}
                            </Typography>
                          )
                        })}
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Experiences
