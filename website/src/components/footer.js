import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { linkedin, instagram, github } from "./staticData"

import ReactMarkdown from "react-markdown"

import {
  Button,
  Grid,
  Paper,
  Typography,
  Container,
  IconButton,
} from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import NaturePeopleIcon from "@material-ui/icons/NaturePeople"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    paddingTop: 30,
    paddingBottom: 30,
    color: "white",
    background: "#040e18",
  },
}))

const Footer = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      logo_white: file(relativePath: { eq: "logo_white.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Paper className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="body2">
          Made with <FavoriteBorderIcon style={{ color: "red" }} />
        </Typography>
        <div style={{ width: "80px" }}>
          <Img fluid={data.logo_white.childImageSharp.fluid} />
        </div>{" "}
        <Typography variant="body1">nikhilthakare14@gmail.com</Typography>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <IconButton style={{ color: "#fff" }} target="_blank" href={github}>
              <GitHubIcon />
            </IconButton>
            <IconButton
              style={{ color: "#fff" }}
              target="_blank"
              href={linkedin}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              style={{ color: "#fff" }}
              target="_blank"
              href={instagram}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Footer
