import { createStore } from 'redux'
import { StoreState } from './types'

import reducer from './reducer'

const store = createStore<StoreState>(reducer)

export default store