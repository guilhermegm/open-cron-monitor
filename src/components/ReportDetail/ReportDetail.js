import React, { Component } from 'react'
import CentralizedPaper from '../CentralizedPaper'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

class ReportDetail extends Component {
  render() {
    const { classes } = this.props

    return (
      <CentralizedPaper>
        <Paper className={classes.root}>
          <Grid container direction="column" spacing={16}>
            <Grid item>
              <Typography>Name</Typography>
              <Typography variant="headline">{this.props.report.name}</Typography>
            </Grid>
            <Grid item>
              <Typography>Success</Typography>
              <Typography variant="headline">
                {this.props.report.success ? 'Ok' : 'Error'}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>Started at</Typography>
              <Typography variant="headline">{this.props.report.startedAt}</Typography>
            </Grid>
            <Grid item>
              <Typography>Ended at</Typography>
              <Typography variant="headline">{this.props.report.endedAt}</Typography>
            </Grid>
            <Grid item>
              <Typography>Log</Typography>
              <Typography variant="headline">{this.props.report.log}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </CentralizedPaper>
    )
  }
}

export default withStyles(styles)(ReportDetail)
