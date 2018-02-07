import { Performance } from '../../../types'

import PerformanceAction, { AddPerformanceActionType } from './types'

export const addPerformance = (performance: Performance): PerformanceAction => {
  return {
    type: AddPerformanceActionType,
    payload: { performance }
  }
}