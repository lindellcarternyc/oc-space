import { Reducer } from 'redux'
import PerformanceAction, { AddPerformanceActionType } from '../actions/performance'
import PerformanceState from '../store/performance'

import { getPerformances } from '../data'

const initialState = {
  performances: getPerformances()
}

const performanceReducer: Reducer<PerformanceState> = (
  state: PerformanceState = initialState, action: PerformanceAction
) => {
  switch (action.type) {
    case AddPerformanceActionType:
      const performances = [...state.performances, action.payload.performance]
      return {...state, performances}
    default: return state
  }
}

export default performanceReducer