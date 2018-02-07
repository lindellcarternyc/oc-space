import { Performance } from '../../../types'

export const AddPerformanceActionType = 'ADD_PERFORMANCE'
export type AddPerformanceActionType = typeof AddPerformanceActionType

export interface AddPerformanceAction {
  type: AddPerformanceActionType,
  payload: {
    performance: Performance
  }
}

type PerformanceAction = AddPerformanceAction
export default PerformanceAction