import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from "react-markdown"

import Image from "./image"
import {
  Button,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles(theme => ({
  root: {},
}))

const DisplayEducation = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      strapiEducations {
        Title
        strapiId
        education {
          id
          degreeName
          college
          marks
        }
      }
    }
  `)

  return (
    <Paper elevation={0} className={classes.root} square>
      <Grid container direction="column" justify="space-evenly" align="center">
        <Grid item>
          <Grid container direction="column">
            <Typography variant="h4">{data.strapiEducations.Title}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-evenly" align="center">
            {data.strapiEducations.education.map(item => {
              return (
                <Grid item xs={3} id={item.id}>
                  <Card elevation={0}>
                    <CardContent>
                      <Typography variant="h5">{item.degreeName}</Typography>
                      <Typography
                        variant="body"
                        color="textSecondary"
                        component="p"
                      >
                        {item.college}

                        {item.marks}
                      </Typography>
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

export default DisplayEducation