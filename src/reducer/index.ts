import { combineReducers } from 'redux'
import StoreState from '../store/state'

import navigationReducer from './navigation-reducer'
import performancesReducer from './performances-reducer'

const rootReducer = combineReducers<StoreState>({
  navigationState: navigationReducer,
  performancesState: performancesReducer
})

export default rootReducer