import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ReportTableContainer from './containers/ReportTableContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={16} direction="column">
          <Grid item>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Open Cron Monitor
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>

          <Grid item>
            <ReportTableContainer />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App
