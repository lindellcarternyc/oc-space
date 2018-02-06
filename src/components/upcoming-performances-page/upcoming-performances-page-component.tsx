import * as React from 'react'

import { Header } from 'semantic-ui-react'

import { Performance } from '../../types'
import PerformanceCards from '../performance-card/performance-cards'

export interface UpcomingPerformancesPageComponentProps {
  upcomingPerformances: Performance[]
}

const UpcomingPerformancesPageComponent = (props: UpcomingPerformancesPageComponentProps) => {
  const { upcomingPerformances } = props
  return (
    <div>
      <Header as='h2' content='Upcoming Performances' />
      <PerformanceCards performances={upcomingPerformances}/>
    </div>
  )
}

export default UpcomingPerformancesPageComponent