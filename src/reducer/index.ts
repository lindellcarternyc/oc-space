import { combineReducers } from 'redux'
import StoreState from '../store/state'

import performancesReducer, * as performances from './performances-reducer'

import authReducer from './auth-reducer'

const rootReducer = combineReducers<StoreState>({
  performancesState: performancesReducer,
  authState: authReducer
})

export default rootReducer

export const getUpcomingPerformances = (state: StoreState) => {
  const { performancesState } = state
  return performances.getUpcomingPerformances(performancesState)
}