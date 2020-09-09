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
  CardMedia,
  Box,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import StarIcon from "@material-ui/icons/Star"

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,

    backgroundColor: "gold",
  },
  image: {
    width: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  content: {
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
}))

const DisplayAwards = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      strapiAwards {
        title
        desciption
        award {
          id
          title
          descrption
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
    <Paper elevation={0} className={classes.root} square>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box>
          <Typography variant="h4">{data.strapiAwards.title}</Typography>
          <Typography variant="body">{data.strapiAwards.desciption}</Typography>
        </Box>

        {data.strapiAwards.award.map(item => {
          return (
            <Box>
              <Grid
                container
                justify="space-around"
                alignItems="center"
                id={item.id}
              >
                <Box className={classes.image}>
                  <Img fluid={data.plant.childImageSharp.fluid} />
                </Box>
                <Box className={classes.content}>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="body1">{item.descrption}</Typography>
                </Box>
              </Grid>
            </Box>
          )
        })}
      </Grid>
    </Paper>
  )
}

export default DisplayAwards
