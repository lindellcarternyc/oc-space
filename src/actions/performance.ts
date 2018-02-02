import ActionKey from './actionKeys'
import { Performance } from '../types'

interface AddPerformanceAction {
  type: ActionKey.ADD_PERFORMANCE
  payload: {
    performance: Performance
  }
}

export default AddPerformanceAction