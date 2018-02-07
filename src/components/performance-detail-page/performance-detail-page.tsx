import * as React from 'react'
import { connect } from 'react-redux'
import State from '../../redux/state/types'
import { getPerformanceById } from '../../redux/reducers/root'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Performance } from '../../types'
import PerformanceDetailPageComponent from './performance-detail-page-component'

interface PerformanceDetailPageProps extends RouteComponentProps<{id: string}> {
  performance: Performance
}

const PerformanceDetailPage = (props: PerformanceDetailPageProps) => {
  const { performance } = props
  if (performance !== undefined ) {
    return (
      <PerformanceDetailPageComponent performance={performance}/>
    )
  } else {
    return (<p>No Performance</p>)
  }
}

const mapStateToProps = (state: State, ownProps: PerformanceDetailPageProps) => {
  const id = ownProps.match.params.id.slice(4)
  return {
    performance: getPerformanceById(state)(id)
  }
}

export default withRouter(
  connect(
    mapStateToProps
  )(PerformanceDetailPage)
)