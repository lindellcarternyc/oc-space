import * as React from 'react'

import { Header } from 'semantic-ui-react'
import Page from '../../components/page'
import PerformanceCards from '../../components/performance-card/performance-cards'

import { Performance } from '../../types'
import { connect } from 'react-redux'
import StoreState from '../../store/state'

interface UpcomingPerformancesProps {
  performances: Performance[]
}

const UpcomingPerformances = (props: UpcomingPerformancesProps) => {
  return (
    <Page>
      <Header as='h2' content='Upcoming Performances' />
      <PerformanceCards performances={props.performances}/>
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