import { connect } from 'react-redux'
import StoreState from '../../store/state'
import { getUpcomingPerformances } from '../../reducer'

import UpcomingPerformancesPageComponent, { 
  UpcomingPerformancesPageComponentProps 
}  from './upcoming-performances-page-component'

const mapStateToProps = (state: StoreState): UpcomingPerformancesPageComponentProps => {
  return {
    upcomingPerformances: getUpcomingPerformances(state)
  }
}
export default connect(
  mapStateToProps
)(UpcomingPerformancesPageComponent)