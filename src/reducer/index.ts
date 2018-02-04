import { combineReducers } from 'redux'
import StoreState from '../store/state'

import navigationReducer from './navigation-reducer'
import performancesReducer from './performances-reducer'
import authReducer from './auth-reducer'

const rootReducer = combineReducers<StoreState>({
  navigationState: navigationReducer,
  performancesState: performancesReducer,
  authState: authReducer
})

export default rootReducer