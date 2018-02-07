import { connect } from 'react-redux'
import State from '../../redux/state/types'

import { getPerformances } from '../../redux/reducers/root'

import UpcomingPerformancesPageComponent, { 
  UpcomingPerformancesPageComponentProps 
}  from './upcoming-performances-page-component'

const mapStateToProps = (state: State): UpcomingPerformancesPageComponentProps => {
  return {
    upcomingPerformances: getPerformances(state)
  }
}
export default connect(
  mapStateToProps
)(UpcomingPerformancesPageComponent)