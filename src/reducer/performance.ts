import { Reducer } from 'redux'

import { PerformanceStore } from '../store/store-state'
import ActionKey from '../actions/actionKeys'
import AddPerformanceAction  from '../actions/performance'

import { getPerformances } from '../data'
const initialState: PerformanceStore = {
  performances: getPerformances()
}

const performanceReducer: Reducer<PerformanceStore> = (
  state: PerformanceStore = initialState, action: AddPerformanceAction
): PerformanceStore => {
  switch (action.type) {
    case ActionKey.ADD_PERFORMANCE:
      const performance = action.payload.performance
      const performances = [...state.performances, performance]
      return {...state, performances}
    default: return state
  }
}

export default performanceReducer