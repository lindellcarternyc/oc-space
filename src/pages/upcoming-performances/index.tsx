import * as React from 'react'

import { Header, Card, } from 'semantic-ui-react'
import UpcomingPerformanceCard from './upcoming-performance-card'

import Page from '../../components/page'
import { Performance } from '../../types'

import { connect } from 'react-redux'
import StoreState from '../../store/state'

interface UpcomingPerformancesProps {
  performances: Performance[]
  isAuthenticated: boolean
}

const UpcomingPerformances = (props: UpcomingPerformancesProps) => {
  return (
    <Page
      authenticated={props.isAuthenticated}
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

const mapStateToProps = (state: StoreState) => {
  return {
    performances: state.performancesState.upcomingPerformances
  }
}

export default connect(
  mapStateToProps
)(UpcomingPerformances)