import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Grid, Paper, Box, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    marginBottom: "-0.4rem",
    paddingTop: 100,
    // paddingBottom: 100,

    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      // marginBottom: -10,
      // paddingBottom: 50,
    },

    background: "gold",
  },
  title: {
    margin: 20,
  },
  content: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
}))

const About = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      strapiIntroductions {
        name
        description
      }
    }
  `)

  return (
    <>
      <Paper elevation={0} className={classes.root} id="About">
        <Grid container direction="column" justify="center" alignItems="center">
          <div className={classes.title}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              About Me
            </Typography>
          </div>
          <Box className={classes.content}>
            <Typography variant="body1" style={{ textAlign: "justify" }}>
              {data.strapiIntroductions.description}
            </Typography>
          </Box>
        </Grid>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ff9c03"
            fill-opacity="1"
            d="M0,256L60,245.3C120,235,240,213,360,186.7C480,160,600,128,720,138.7C840,149,960,203,1080,224C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
          <path
            fill="#1c1100"
            fill-opacity="1"
            d="M0,256L40,266.7C80,277,160,299,240,309.3C320,320,400,320,480,320C560,320,640,320,720,298.7C800,277,880,235,960,234.7C1040,235,1120,277,1200,288C1280,299,1360,277,1400,266.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </Paper>
    </>
  )
}

export default About
