import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import React from 'react'
import { shallow } from 'enzyme'
import ReportDetail from './ReportDetail'

Enzyme.configure({ adapter: new Adapter() })

describe('ReportDetail', () => {
  it('should render properly', () => {
    const report = { id: 1, success: true, name: 'name-1', createdAt: 'createdAt-1', startedAt: 'startedAt-1' }
    const wrapper = shallow(<ReportDetail report={report} />)

    expect(wrapper.dive()).toMatchSnapshot();
  })
})
