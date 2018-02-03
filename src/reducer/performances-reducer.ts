import { Reducer } from 'redux'

import PerformancesAction, { AddPerformanceActionType } from '../actions/performances-actions'
import PerformancesState from '../store/performances-state'
import { getPerformances } from '../data'

const initialState: PerformancesState = {
  upcomingPerformances: getPerformances()
}

const performancesReducer: Reducer<PerformancesState> = 
  (state: PerformancesState = initialState, action: PerformancesAction) => {
  
  switch (action.type) {
    case AddPerformanceActionType:
      const upcomingPerformances = [...state.upcomingPerformances, action.payload.performance]
      return { ...state, upcomingPerformances }

    default:
      return state
  }
}

export default performancesReducer