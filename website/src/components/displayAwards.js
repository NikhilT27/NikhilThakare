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
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "gold",
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
    }
  `)

  return (
    <Paper elevation={0} className={classes.root} square>
      <Grid container direction="column" justify="space-evenly" align="center">
        <Grid item>
          <Grid container direction="column">
            <Typography variant="h4">{data.strapiAwards.title}</Typography>
            <Typography variant="body">
              {data.strapiAwards.desciption}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-evenly" align="center">
            {data.strapiAwards.award.map(item => {
              return (
                <Grid item xs={3} id={item.id}>
                  <Card elevation={0}>
                    <CardContent>
                      <Typography variant="h5">{item.title}</Typography>
                      <Typography
                        variant="body"
                        color="textSecondary"
                        component="p"
                      >
                        {item.descrption}
                      </Typography>
                      <Img fluid={item.image.childImageSharp.fluid} />
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default DisplayAwards
