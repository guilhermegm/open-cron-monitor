import React, { Component } from 'react'
import axios from 'axios'
import ReportDetail from '../components/ReportDetail'

class ReportDetailContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { report: [] }
  }

  async componentDidMount() {
    const response = await axios.get(`/api/reports/${this.props.match.params.reportId}`)
    this.setState({ report: response.data })
  }

  render() {
    return <ReportDetail report={this.state.report} />
  }
}

export default ReportDetailContainer
