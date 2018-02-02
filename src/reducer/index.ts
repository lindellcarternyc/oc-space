import { combineReducers } from 'redux'
import StoreState from '../store/store-state'

import performanceReducer from './performance'
import pageReducer from './page'
import authReducer from './auth'

const reducer = combineReducers<StoreState>({
  performanceState: performanceReducer,
  pageState: pageReducer,
  authState: authReducer
})

export default reducer