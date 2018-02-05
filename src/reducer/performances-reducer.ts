import { Reducer } from 'redux'

import PerformancesAction, { AddPerformanceActionType } from '../actions/performances-actions'
import PerformancesState from '../store/performances-state'
import { getPerformances } from '../data'

const initialState: PerformancesState = {
  upcomingPerformances: getPerformances()
}

let id = 0

const performancesReducer: Reducer<PerformancesState> = 
  (state: PerformancesState = initialState, action: PerformancesAction) => {
  
  switch (action.type) {
    case AddPerformanceActionType:
      const _id = 'A_' + id.toString(10)
      const upcomingPerformances = {...state.upcomingPerformances, [_id]: action.payload.performance}
      return { ...state, upcomingPerformances }

    default:
      return state
  }
}

export default performancesReducer

export const getUpcomingPerformances = (state: PerformancesState) => {
  const { upcomingPerformances } = state
  return Object.keys(upcomingPerformances).map(k => upcomingPerformances[k])
}