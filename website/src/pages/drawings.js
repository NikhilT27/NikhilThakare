import React from "react"

import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Typography, Container, IconButton, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CssBaseline from "@material-ui/core/CssBaseline"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 130,
    [theme.breakpoints.down("sm")]: {
      padding: 50,
    },

    background: "#fff",
  },
  image: {
    width: "500px",
    marginBottom: `1.45rem`,
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
}))

const Drawings = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "cleopatra.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      krishna: file(relativePath: { eq: "krishna.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      medusa: file(relativePath: { eq: "medusa.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eye: file(relativePath: { eq: "eye.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      harlie: file(relativePath: { eq: "harlie.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      girlwithhorns: file(relativePath: { eq: "girlwithhorns.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <CssBaseline />
      <Layout>
        <SEO title="Drawings" />
        <Box className={classes.root}>
          <Typography variant="h1">Hi </Typography>
          <Typography variant="h1">Welcome to Drawing</Typography>
          <Grid container justify="space-evenly" alignItems="center">
            <Box className={classes.image}>
              <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </Box>
            <Box className={classes.image}>
              <Img fluid={data.krishna.childImageSharp.fluid} />
            </Box>
            <Box className={classes.image}>
              <Img fluid={data.medusa.childImageSharp.fluid} />
            </Box>
            <Box className={classes.image}>
              <Img fluid={data.eye.childImageSharp.fluid} />
            </Box>
            <Box className={classes.image}>
              <Img fluid={data.harlie.childImageSharp.fluid} />
            </Box>
            <Box className={classes.image}>
              <Img fluid={data.girlwithhorns.childImageSharp.fluid} />
            </Box>
          </Grid>

          <Link to="/">
            <IconButton>
              <ArrowBackIcon style={{ fontSize: 60 }} />
            </IconButton>
          </Link>
        </Box>
      </Layout>
    </>
  )
}

export default Drawings
