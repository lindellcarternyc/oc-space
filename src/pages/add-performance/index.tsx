import { Performance } from '../../types'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import StoreState from '../../store/state'
import { addPerformance } from '../../actions/performances-actions'
import { withRouter, } from 'react-router-dom'

import AddPerformanceComponent from './add-performance-component'

const mapDispatchToProps = (
  dispatch: Dispatch<StoreState>
) => {
  return {
    addPerformance: (performance: Performance) => {
      dispatch(addPerformance(performance))
    }
  }
}

export default withRouter(connect(
  null,
  mapDispatchToProps
)(AddPerformanceComponent))