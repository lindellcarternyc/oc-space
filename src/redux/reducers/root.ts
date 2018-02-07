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
export const getPerformances = (state: State): Performance[] => {
  const { performances } = state
  return performanceSelectors.getPerformances(performances)
}

export const isAuthenticated = (state: State): boolean => {
  const { auth } = state
  return authSelectors.isAuthenticated(auth)
}