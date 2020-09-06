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
    <Paper elevation={0} className={classes.root} square>
      {/* {data.allStrapiExperiences.edges.map(({ node }) => {
        console.log(node.Title)
      })} */}
      <Grid container>
        {data.allStrapiExperiences.edges.map(({ node }) => {
          return (
            <Grid item xs={12} id={node.strapiId}>
              <Grid direction="column" container>
                <Grid item>
                  <Typography variant="h6">{node.Title}</Typography>
                  <Typography variant="body">{node.Company}</Typography>
                  <Typography variant="body">{node.Description}</Typography>
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
          )
        })}
      </Grid>
    </Paper>
  )
}

export default Experiences
