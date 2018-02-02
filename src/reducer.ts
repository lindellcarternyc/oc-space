import { Reducer } from 'redux'
import { StoreState } from './types'
import { AddPerformance } from './actions'
import { ADD_PERFORMANCE } from './constants'

import { getPerformances } from './data'

const initialState: StoreState = {
  performances: getPerformances()
}

const reducer: Reducer<StoreState> = (state: StoreState = initialState, action: AddPerformance ): StoreState => {
  console.dir('reducer received action')
  console.dir({state, action})
  switch (action.type) {
    case ADD_PERFORMANCE:
      return {...state, performances: [...state.performances, action.performance]}
    default:
      return state
  }
}

export default reducer