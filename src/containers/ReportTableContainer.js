import React, { Component } from 'react'
import axios from 'axios'
import ReportTable from '../components/ReportTable'

class ReportTableContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { reports: [] }
  }

  async componentDidMount() {
    const response = await axios.get('/api/reports')
    this.setState({ reports: response.data })
  }

  render() {
    return <ReportTable reports={this.state.reports} />
  }
}

export default ReportTableContainer
