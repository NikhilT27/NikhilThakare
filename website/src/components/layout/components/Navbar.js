import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import MenuIcon from "@material-ui/icons/Menu"
import {
  Box,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core"
import { Link, useStaticQuery, graphql } from "gatsby"

import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import Fab from "@material-ui/core/Fab"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    fontWeight: "bold",
    color: "black",
  },
  toolbar: {
    background: "transparent",
    boxShadow: "none",
  },
  button: {
    backgroundColor: "yellow",
  },
}))

export const Navbar = () => {
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
    <div className={classes.root}>
      <AppBar className={classes.toolbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {/* {data.strapiIntroductions.Name} */}N T
          </Typography>
          <Box display={{ xs: "none", sm: "block" }}>
            <Button color="inherit">
              <Link to="/page-2" style={{ textDecoration: "none" }}>
                <Typography className={classes.title}> Page2</Typography>
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/drawings" style={{ textDecoration: "none" }}>
                <Typography className={classes.title}> Drawing</Typography>
              </Link>
            </Button>
          </Box>
          <Box display={{ xs: "inline", sm: "none" }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Toolbar>
          <Grid direction="column">
            <Grid item>
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/in/nikhil-t/"
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/in/nikhil-t/"
              >
                <GitHubIcon />
              </IconButton>
            </Grid>{" "}
            <Grid item>
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/in/nikhil-t/"
              >
                <InstagramIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
