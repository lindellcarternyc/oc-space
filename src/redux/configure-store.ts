import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers/root'
import State from './state/types'

import { setStateToLocalStorage } from '../local-storage/local-storage'
import { saveUserToSessionStorage } from '../session-storage'
const middleWare = applyMiddleware(logger)
export const configureStore = () => {
  const store = createStore(
    rootReducer,
    middleWare
  )
  return store
}
export const saveStore = (store: State) => {
  const { performances } = store.performances
  setStateToLocalStorage(performances)

  const { user } = store.auth
  saveUserToSessionStorage(user)
}