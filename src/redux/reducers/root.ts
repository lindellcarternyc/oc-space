import { combineReducers } from 'redux'

import State from '../state/types'
import performancesReducer, * as performanceSelectors from './performance'
import authReducer, * as authSelectors from './auth'

const rootReducer = combineReducers<State>({
  performances: performancesReducer,
  auth: authReducer
})
export default rootReducer

// selectors
import { Performance } from '../../types'
export const getPerformances = (state: State): {id: string, performance: Performance}[] => {
  const { performances } = state
  return performanceSelectors.getPerformances(performances)
}

export const getPerformanceById = (state: State): (id: string) =>  Performance | undefined => {
  const { performances } = state
  return (matchId: string) => {
    return performanceSelectors.getPerformanceById(performances)(matchId)
  } 
}

export const isAuthenticated = (state: State): boolean => {
  const { auth } = state
  return authSelectors.isAuthenticated(auth)
}