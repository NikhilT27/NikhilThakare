import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from "react-markdown"

import Image from "../components/image"
import {
  Button,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core"
import Rating from "@material-ui/lab/Rating"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 0,
    backgroundColor: "yellow",
  },
}))

const DisplaySkills = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    {
      strapiSkills {
        Title
        skill_tagline
        skill {
          id
          title
          description
          experience
          level
        }
      }
    }
  `)
  return (
    <Paper elevation={0} className={classes.root} square>
      <Grid container direction="column" justify="space-evenly" align="center">
        <Grid item>
          <Grid container direction="column">
            <h1>{data.strapiSkills.Title}</h1>
            <div>
              <ReactMarkdown source={data.strapiSkills.skill_tagline} />
            </div>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-evenly" align="center">
            {data.strapiSkills.skill.map(item => {
              return (
                <Grid item xs={3} id={item.id}>
                  <Card elevation={0}>
                    <CardContent>
                      <Typography variant="h5">{item.title}</Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.experience}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Level
                      </Typography>
                      <Rating name="Level" value={item.level} readOnly />
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

export default DisplaySkills
