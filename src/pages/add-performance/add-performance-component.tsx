import * as React from 'react'

import { Header } from 'semantic-ui-react'

import { Performance } from '../../types'
import AddPerformanceForm, { AddPerformanceFormData } from './add-performance-form'

import { RouteComponentProps } from 'react-router-dom'

export interface AddPerformanceComponentProps extends RouteComponentProps<{}> {
  addPerformance: (performance: Performance) => void
}

class AddPerformanceComponent extends React.Component<AddPerformanceComponentProps> {
  constructor(props: AddPerformanceComponentProps) {
    super(props)
  }

  onSubmit = (data: AddPerformanceFormData) => {
    const performance = {image: '', ...data}
    this.props.addPerformance(performance)
    this.props.history.push('/upcoming-performances')
  }

  render() {
    return (
      <div>
        <Header as='h2' content='Add Performance' />
        <AddPerformanceForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

export default AddPerformanceComponent