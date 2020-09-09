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
} from "@material-ui/core"

import GitHubIcon from "@material-ui/icons/GitHub"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "#a1ffaa",
  },
  experienceBox: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  image: {
    width: "300px",
  },
  content: {
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
}))

const Experiences = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
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

  return (
    <Paper elevation={0} className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <Typography variant="h3">Experience</Typography>
        <Typography>Description</Typography>

        {data.allStrapiExperiences.edges.map(({ node }) => {
          return (
            <Box className={classes.experienceBox}>
              <Grid container justify="space-between" alignItems="center">
                <div className={classes.image}>
                  <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </div>

                <div className={classes.content}>
                  <Grid container direction="column">
                    <Typography variant="h6">{node.Title}</Typography>
                    <Typography variant="body">{node.Company}</Typography>
                    <Typography variant="body">{node.date}</Typography>
                    <Typography variant="body">{node.Description}</Typography>

                    {node.Details.map(({ id, brief }) => {
                      return (
                        <Typography id={id} variant="body1">
                          {brief}
                        </Typography>
                      )
                    })}
                  </Grid>
                </div>
              </Grid>
            </Box>
          )
        })}
      </Grid>
    </Paper>
  )
}

export default Experiences
