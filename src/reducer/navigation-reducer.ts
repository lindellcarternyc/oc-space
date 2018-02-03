import { Reducer } from 'redux'

import { Page } from '../types/navigation-types'
import NavigationAction, { NavigateToPageActionType } from '../actions/navigation-actions'
import NavigationState from '../store/navigation-state'

const initialState: NavigationState = {
  currentPage: Page.HomePage,
  previousPage: null,
  history: []
}

const navigationReducer: Reducer<NavigationState> = 
  (state: NavigationState = initialState, action: NavigationAction ): NavigationState => {
    
  switch (action.type) {
    case NavigateToPageActionType:
      const currentPage = action.payload.destination
      const previousPage = state.currentPage
      const history = [...state.history, previousPage]
      return {...state, currentPage, previousPage, history}
    default: return state
  }
}

export default navigationReducer