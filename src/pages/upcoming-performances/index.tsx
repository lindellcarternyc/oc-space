import * as React from 'react'

import { Header } from 'semantic-ui-react'
import PerformanceCards from '../../components/performance-card/performance-cards'

import { Performance } from '../../types'
import { connect } from 'react-redux'
import StoreState from '../../store/state'
import { getUpcomingPerformances } from '../../reducer'

interface UpcomingPerformancesProps {
  performances: Performance[]
}

const UpcomingPerformances = (props: UpcomingPerformancesProps) => {
  return (
    <div>
      <Header as='h2' content='Upcoming Performances' />
      <PerformanceCards performances={props.performances}/>
    </div>
  )
}

const mapStateToProps = (state: StoreState) => {
  return {
    performances: getUpcomingPerformances(state)
  }
}

export default connect(
  mapStateToProps
)(UpcomingPerformances)