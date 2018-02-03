import { createStore } from 'redux'
import StoreState from './state'

import rootReducer from '../reducer'

const store = createStore<StoreState>(rootReducer)

export default store