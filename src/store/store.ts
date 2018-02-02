import { createStore } from 'redux'
import StoreState  from './store-state'
import reducer from '../reducer'

const store = createStore<StoreState>(reducer)

export default store