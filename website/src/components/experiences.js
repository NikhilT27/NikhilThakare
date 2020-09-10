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
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
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
    width: "200px",
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
      placeholderImage: file(relativePath: { eq: "boldcare.png" }) {
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
      <Grid container direction="column">
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h4">Experience</Typography>
          <Typography variant="body1">Description</Typography>
        </Grid>

        {data.allStrapiExperiences.edges.map(({ node }) => {
          return (
            <Box className={classes.experienceBox}>
              <Grid container justify="space-evenly" alignItems="center">
                <Box className={classes.image}>
                  <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </Box>

                <Box className={classes.content}>
                  <Grid container direction="column">
                    <Typography variant="h5">{node.Title}</Typography>
                    <Typography variant="h6">{node.Company}</Typography>
                    <Typography variant="body1">{node.date}</Typography>
                    <Typography variant="body2">{node.Description}</Typography>

                    {node.Details.map(({ id, brief }) => {
                      return (
                        <Typography id={id} variant="body1">
                          <ChevronRightIcon style={{ fontSize: 15 }} /> {brief}
                        </Typography>
                      )
                    })}
                  </Grid>
                </Box>
              </Grid>
            </Box>
          )
        })}
      </Grid>
    </Paper>
  )
}

export default Experiences
