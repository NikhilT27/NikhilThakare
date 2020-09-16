import React from "react"
import { Typography, Grid, Box, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { linkedin, instagram, github } from "./staticData"

import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import Fab from "@material-ui/core/Fab"

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    left: "20px",
    top: "40%",
  },
}))

const SocialMedia = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <Grid direction="column">
          <Box display={{ xs: "none", sm: "inline" }}>
            <Grid item>
              <IconButton target="_blank" href={linkedin}>
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton target="_blank" href={github}>
                <GitHubIcon />
              </IconButton>
            </Grid>{" "}
            <Grid item>
              <IconButton target="_blank" href={instagram}>
                <InstagramIcon />
              </IconButton>
            </Grid>
          </Box>
        </Grid>
      </div>
    </>
  )
}

export default SocialMedia
