import { Performance } from '../../types'
import PerformancesState from '../state/performances-state'
import PerformancesAction, { AddPerformanceActionType } from '../actions/performance/types'
import { v1 } from 'uuid'
import * as performanceData from '../../data/performances-data'

import { getStateFromLocalStorage } from '../../local-storage/local-storage'

const initialState: PerformancesState = {
  performances: getStateFromLocalStorage() || performanceData.getPerformances()
}

const performancesReducer = (
  state: PerformancesState = initialState, action: PerformancesAction
): PerformancesState => {
  switch (action.type) {
    case AddPerformanceActionType:
      const performance = action.payload.performance
      const id = v1()
      let performances = state.performances
      performances[id] = performance
      return { ...state, performances}

    default:
      return state
  }
}

export default performancesReducer
export const getPerformances = (state: PerformancesState): {id: string, performance: Performance}[] => {
  return Object.keys(state.performances).reduce<{id: string, performance: Performance}[]>(
    ((prev, curr) => {
      const p = {
        id: curr,
        performance: state.performances[curr]
      }
      prev.push(p)
      return prev
    })
  , [])
}

export const getPerformanceById = (state: PerformancesState): (id: string) => Performance | undefined => {
  return (matchId) => state.performances[matchId]
}