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
import { makeStyles } from "@material-ui/core/styles"

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab"
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#9be0f2",
    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      paddingBottom: 20,
    },
  },
  EducationBox: {
    width: "400px",
    margin: 20,
    [theme.breakpoints.down("lg")]: {
      width: "300px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: 10,
    },
  },
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
            <Timeline align="alternate">
              {data.strapiEducations.education.map(item => {
                return (
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Card elevation={0}>
                        <CardContent>
                          <Grid
                            container
                            justify="space-evenly"
                            alignItems="center"
                          >
                            <Grid item>
                              <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                              >
                                <Typography variant="h5">
                                  {item.degreeName}
                                </Typography>
                                <Typography
                                  variant="body"
                                  color="textSecondary"
                                  component="p"
                                >
                                  {item.college}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Grid
                                container
                                justify="center"
                                alignItems="center"
                              >
                                <Typography variant="h6">
                                  {item.marks}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </TimelineContent>
                  </TimelineItem>
                )
              })}
            </Timeline>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default DisplayEducation
