import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ReportTableContainer from './containers/ReportTableContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <Grid container spacing={16} direction="column">
          <Grid item>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  <Link to="/">Open Cron Monitor</Link>
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>

          <Grid item>
            <Route exact path="/" component={ReportTableContainer} />
          </Grid>
        </Grid>
      </Router>
    )
  }
}

export default App
