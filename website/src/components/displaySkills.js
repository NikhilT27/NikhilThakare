import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import ReactMarkdown from "react-markdown"

import {
  Button,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core"
import Rating from "@material-ui/lab/Rating"
import BrushIcon from "@material-ui/icons/Brush"
import KeyboardIcon from "@material-ui/icons/Keyboard"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      paddingBottom: 20,
    },
    backgroundColor: "yellow",
  },
  skillBox: {
    maxWidth: "500px",
    margin: 20,
    [theme.breakpoints.down("lg")]: {
      maxWidth: "300px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: 10,
    },
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
          type
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
          <Grid container justify="space-around" alignItems="center">
            {data.strapiSkills.skill.map(item => {
              return (
                <Grid item id={item.id} className={classes.skillBox}>
                  <Card elevation={0}>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={2}>
                          <Grid container direction="column">
                            {item.type === "design" ? (
                              <BrushIcon />
                            ) : (
                              <KeyboardIcon />
                            )}
                          </Grid>
                        </Grid>
                        <Grid item xs={9}>
                          <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="flex-start"
                          >
                            <Typography variant="h5">{item.title}</Typography>
                            <Typography variant="body1" color="textSecondary">
                              {item.description}
                            </Typography>
                            <Typography variant="body1">
                              {item.experience} year
                            </Typography>

                            <Rating name="Level" value={item.level} readOnly />
                          </Grid>
                        </Grid>
                      </Grid>
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
