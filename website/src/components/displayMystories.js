import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

import Image from "../components/image"
import {
  Button,
  Grid,
  Paper,
  Typography,
  CardContent,
  Card,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#C2D2C1",
    paddingTop: 100,
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
    <Paper elevation={0} className={classes.root} square>
      <Grid container direction="column" justify="space-evenly" align="center">
        <Grid item>
          <Grid container direction="column">
            <Typography variant="h4">My story</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-evenly" align="center">
            {data.strapiMystories.story.map(item => {
              return (
                <Grid item xs={12} id={item.id}>
                  <Card elevation={0}>
                    <CardContent>
                      <Typography variant="h5">{item.title}</Typography>
                      <div>
                        <ReactMarkdown
                          source={item.description}
                        ></ReactMarkdown>
                      </div>
                      <Typography>{item.date}</Typography>
                      <Img fluid={item.image.childImageSharp.fluid} />
                    </CardContent>
                  </Card>
                  <Divider />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default DisplayMystories
