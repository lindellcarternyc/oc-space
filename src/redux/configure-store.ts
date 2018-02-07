import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers/root'

const middleWare = applyMiddleware(logger)
const configureStore = () => {
  const store = createStore(
    rootReducer,
    middleWare
  )
  return store
}

export default configureStore