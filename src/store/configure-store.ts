import { Store, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import StoreState from './state'
import rootReducer from '../reducer'

const configureStore = (): Store<StoreState> => {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  )
  return store
}

export default configureStore