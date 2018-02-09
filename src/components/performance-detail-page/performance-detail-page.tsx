import * as React from 'react'
import { connect } from 'react-redux'
import State from '../../redux/state/types'
import { getPerformanceById } from '../../redux/reducers/root'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Location } from '../../types'
import Singer from '../../types/singer'
import PerformanceDetailPageComponent from './performance-detail-page-component'

import { getSingersByIds } from '../../data/singers'

interface PerformanceDetailPageProps extends RouteComponentProps<{id: string}> {
  date: string
  time: string
  performanceLocation: Location
  singers: Singer[]
}

const PerformanceDetailPage = (props: PerformanceDetailPageProps) => {
  // const { date, time, location, singers } = props
  if ( props.performanceLocation !== Location.NONE ) {
    return (
      <PerformanceDetailPageComponent 
        date={props.date}
        time={props.time}
        location={props.performanceLocation}
        singers={props.singers}
      />
    )
  } else {
    return (<p>No Performance</p>)
  }
}

const mapStateToProps = (state: State, ownProps: PerformanceDetailPageProps) => {
  const id = ownProps.match.params.id.slice(4)
  const performance = getPerformanceById(state)(id)
  if (performance !== undefined) {
    const { date, time, location, singerIDs } = performance
    let singers: Singer[]
    if (singerIDs !== undefined) {
      singers = getSingersByIds(...singerIDs)
    } else {
      singers = []
    }
    return {
      date, time, performanceLocation: location, singers
    }
  } else {
    return {
      date: '', time: '', performanceLocation: Location.NONE, singers: []
    }
  }
}

export default withRouter(
  connect(
    mapStateToProps
  )(PerformanceDetailPage)
)