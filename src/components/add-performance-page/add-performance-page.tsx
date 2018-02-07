import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import State from '../../redux/state/types'
import { addPerformance } from '../../redux/actions/performance'
import { Performance } from '../../types'
import AddPerformancePageComponent from './add-performance-page-component'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  return {
    addPerformance: (performance: Performance) => {
      dispatch(addPerformance(performance))
    }
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddPerformancePageComponent)
)