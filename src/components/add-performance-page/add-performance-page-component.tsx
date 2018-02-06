import * as React from 'react'

import { Header } from 'semantic-ui-react'
import { Performance } from '../../types'
import AddPerformanceForm from './add-performance-form'
import { RouteComponentProps } from 'react-router-dom'

interface AddPerformancePageComponentProps extends RouteComponentProps<{}> {
  addPerformance: (performance: Performance) => void
}
const AddPerformancePageComponent = (props: AddPerformancePageComponentProps) => {
  return (
    <div>
      <Header as='h2' content='Add Performance' />
      <AddPerformanceForm 
        onSubmit={(performance: Performance) => {
          props.addPerformance(performance)
          props.history.replace('/upcoming-performances')
        }}
      />
    </div>
  )
}

export default AddPerformancePageComponent