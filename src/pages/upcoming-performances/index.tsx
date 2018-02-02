import * as React from 'react'

import { Header, Card, } from 'semantic-ui-react'
// const image = require('../../assets/images/matthew.png')
import UpcomingPerformanceCard from './upcoming-performance-card'

import Page from '../../components/page'
import { Performance } from '../../types'

interface UpcomingPerformancesProps {
  performances: Performance[]
  signinCallback: () => void
  isAuthenticated: boolean
}

const UpcomingPerformances = (props: UpcomingPerformancesProps) => {
  return (
    <Page 
      authenticated={props.isAuthenticated} 
      signinCallback={props.signinCallback}
      upcomingPerformancesCallback={() => {console.dir('already on upcoming performances')}}
    >
      <Header as='h2' content='Upcoming Performances' />
      <Card.Group>
        {props.performances.map(performance => {
          return (
            <UpcomingPerformanceCard 
              key={performance.date + '_' + performance.location}
              performance={performance}
            />
          )
        })}
      </Card.Group>
    </Page>
  )
}

export default UpcomingPerformances