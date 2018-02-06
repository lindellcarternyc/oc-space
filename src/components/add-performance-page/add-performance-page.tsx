import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import StoreState from '../../store/state'
import { addPerformance } from '../../actions/performances-actions' 
import { Performance } from '../../types'
import AddPerformancePageComponent from './add-performance-page-component'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
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