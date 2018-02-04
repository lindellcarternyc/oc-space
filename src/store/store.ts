import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import StoreState from './state'

import rootReducer from '../reducer'

const store = createStore<StoreState>(
  rootReducer,
  applyMiddleware(logger)
)

export default store