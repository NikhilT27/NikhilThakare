import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

import Image from "../components/image"
import { Button, Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#C2D2C1",
    paddingTop: 100,
    margin: -32,
  },
}))

const DisplayMystories = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      strapiMystories {
        story {
          id
          title
          description
          date(formatString: "DD MMMM, YYYY")
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
    <>
      <div className={classes.root}>
        <Grid
          container
          xs="12"
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h3">My Stories</Typography>
          </Grid>
          <Grid container justify="space-evenly" spacing={2}>
            {data.strapiMystories.story.map(item => {
              return (
                <Grid item>
                  <Paper
                    style={{
                      width: "800px",
                      marginBottom: `1.45rem`,
                    }}
                  >
                    <Typography>{item.title}</Typography>
                    <Img fluid={item.image.childImageSharp.fluid} />
                    <Typography>{item.description}</Typography>
                    <Typography>{item.date}</Typography>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default DisplayMystories
