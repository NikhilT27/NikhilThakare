import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Grid, Paper, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 100,
    marginBottom: "-0.5rem",
    // paddingBottom: 100,
    backgroundColor: "gold",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 30,
      // paddingBottom: 30,
    },
  },
  image: {
    width: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  content: {
    width: "500px",
    paddingTop: "30px",
    paddingBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
}))

const DisplayAwards = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      allStrapiAwards {
        nodes {
          strapiId
          title
          description
        }
      }
      plant: file(relativePath: { eq: "plant.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Paper id="Achievements" elevation={0} className={classes.root} square>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box>
          <Typography variant="h4">My Achievement</Typography>
          <Typography variant="body1">striving to be better....</Typography>
        </Box>
        <Box>
          <Grid container justify="space-around" alignItems="center">
            <Box className={classes.image}>
              <Img fluid={data.plant.childImageSharp.fluid} />
            </Box>
            <Box>
              {data.allStrapiAwards.nodes.map(item => {
                return (
                  <Box id={item.strapiId} className={classes.content}>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="body1">{item.description}</Typography>
                  </Box>
                )
              })}
            </Box>
          </Grid>
        </Box>
      </Grid>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#040e18"
          fill-opacity="1"
          d="M0,128L120,154.7C240,181,480,235,720,245.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </Paper>
  )
}

export default DisplayAwards
