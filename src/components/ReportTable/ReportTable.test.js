import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import CentralizedPaper from '../CentralizedPaper'
import Paper from '@material-ui/core/Paper'
import ReportTable from './ReportTable'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

Enzyme.configure({ adapter: new Adapter() })

describe('ReportTable', () => {
  it('should render properly', () => {
    const reports = [{ id: 1, success: true, name: 'name-1', createdAt: 'createdAt-1' }]
    const wrapper = shallow(<ReportTable reports={reports} />)

    expect(wrapper.find(CentralizedPaper).length).toBe(1)
    expect(wrapper.find(Paper).length).toBe(1)
    expect(wrapper.find(Table).length).toBe(1)
    expect(wrapper.find(TableBody).length).toBe(1)
    expect(wrapper.find(TableCell).length).toBe(6)
    expect(wrapper.find(TableHead).length).toBe(1)
    expect(wrapper.find(TableRow).length).toBe(2)
    expect(wrapper).toMatchSnapshot();
  })
})
