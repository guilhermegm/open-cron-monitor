import React, { Component } from 'react'
import axios from 'axios'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const CentralizedPaper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

class ReportTable extends Component {
  constructor(props) {
    super(props)
    this.state = { reports: [] }
  }

  async componentDidMount() {
    const response = await axios.get('/api/reports')
    this.setState({ reports: response.data })
  }

  render() {
    return (
      <CentralizedPaper>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.reports.map(report => (
                <TableRow key={report.id}>
                  <TableCell>{report.success ? 'Ok' : 'Error'}</TableCell>
                  <TableCell>{report.name}</TableCell>
                  <TableCell>{report.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </CentralizedPaper>
    )
  }
}

export default ReportTable
