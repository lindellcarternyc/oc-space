import * as React from 'react'

import { Header } from 'semantic-ui-react'
import Page from '../../components/page'

import { Performance } from '../../types'
import AddPerformanceForm, { AddPerformanceFormData } from './add-performance-form'

interface AddPerformanceComponentProps {
  addPerformance: (performance: Performance) => void
  goToUpcomingPerformances: () => void
}

class AddPerformanceComponent extends React.Component<AddPerformanceComponentProps> {
  constructor(props: AddPerformanceComponentProps) {
    super(props)
  }

  onSubmit = (data: AddPerformanceFormData) => {
    const performance = {image: '', ...data}
    this.props.addPerformance(performance)
    this.props.goToUpcomingPerformances()
  }

  render() {
    return (
      <Page>
        <Header as='h2' content='Add Performance' />
        <AddPerformanceForm onSubmit={this.onSubmit}/>
      </Page>
    )
  }
}

export default AddPerformanceComponent