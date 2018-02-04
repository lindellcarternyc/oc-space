import { Performance } from '../../types'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import StoreState from '../../store/state'
import { addPerformance } from '../../actions/performances-actions'
import { navigateToPage } from '../../actions/navigation-actions'
import { Navigation } from '../../types'

import AddPerformanceComponent from './add-performance-component'

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
  return {
    addPerformance: (performance: Performance) => {
      dispatch(addPerformance(performance))
    },
    goToUpcomingPerformances: () => {
      dispatch(navigateToPage(Navigation.Page.UpcomingPerformances))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddPerformanceComponent)