import { Performance } from '../../types'
import PerformancesState from '../state/performances-state'
import PerformancesAction, { AddPerformanceActionType } from '../actions/performance/types'

import { v1 } from 'uuid'
import * as performanceData from '../../data/performances-data'
import LocalStorage from '../../services/local-storage'

type Performances = {[id: string]: Performance}
let initialPerformances: Performances
let data = LocalStorage.getSlice('performances')
if (data !== undefined) {
  // tslint:disable-next-line:no-string-literal
  initialPerformances = data['performances']
} else {
  initialPerformances = performanceData.getPerformances()
}
const initialState: PerformancesState = {
  performances: initialPerformances
}

const performancesReducer = (
  state: PerformancesState = initialState, action: PerformancesAction
): PerformancesState => {
  switch (action.type) {
    case AddPerformanceActionType:
      const { performance } = action.payload
      const id = v1()
      let { performances } = state
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