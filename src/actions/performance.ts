import { Performance } from '../types'

export const AddPerformanceActionType = 'Add Performance Action'
export type AddPerformanceActionType = typeof AddPerformanceActionType

interface AddPerformanceAction {
  type: AddPerformanceActionType
  payload: {
    performance: Performance
  }
}

export const addPerformance = (performance: Performance): AddPerformanceAction => {
  return {
    type: AddPerformanceActionType,
    payload: { performance }
  }
}

type PerformanceAction = AddPerformanceAction
export default PerformanceAction