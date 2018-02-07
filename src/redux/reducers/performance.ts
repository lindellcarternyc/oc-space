import { Performance } from '../../types'
import PerformancesState from '../state/performances-state'
import PerformancesAction, { AddPerformanceActionType } from '../actions/performance/types'

import * as performanceData from '../../data/performances-data'

const initialState: PerformancesState = {
  performances: performanceData.getPerformances()
}

let _id = 0
const performancesReducer = (
  state: PerformancesState = initialState, action: PerformancesAction
): PerformancesState => {
  switch (action.type) {
    case AddPerformanceActionType:
      const performance = action.payload.performance
      const id = 'a_' + _id.toString(10)
      _id++
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