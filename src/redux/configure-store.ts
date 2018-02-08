import { Store, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers/root'
import State from './state/types'

const middleWare = applyMiddleware(logger)
export const configureStore: () => Store<State> = () => {
  const store = createStore(
    rootReducer,
    middleWare
  )
  return store
}