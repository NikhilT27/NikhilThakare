import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

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

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    paddingTop: 30,
    paddingBottom: 30,

    backgroundColor: "#a1c2ff",
  },
}))

const Footer = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    {
      strapiIntroductions {
        id
        Name
        description
      }
    }
  `)
  return (
    <Paper className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography>Logo</Typography>
        <Typography>nikhilthakare14@gmail.com</Typography>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <IconButton>
              <GitHubIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Footer
