import { combineReducers } from 'redux'
import StoreState from '../store/store-state'

import performanceReducer from './performance'
import pageReducer from './page'

const reducer = combineReducers<StoreState>({
  performanceStore: performanceReducer,
  pageStore: pageReducer
})

export default reducer