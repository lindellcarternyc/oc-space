import { combineReducers } from 'redux'
import StoreState from '../store/state'

import performancesReducer from './performances-reducer'
import authReducer from './auth-reducer'

const rootReducer = combineReducers<StoreState>({
  performancesState: performancesReducer,
  authState: authReducer
})

export default rootReducer