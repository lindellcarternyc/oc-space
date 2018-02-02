import { Reducer } from 'redux'

import { PageStore } from '../store/store-state'
import ActionKey from '../actions/actionKeys'
import SwitchPageAction from '../actions/page'

const initialState: PageStore = {
  currentPage: 'Home'
}

const pageReducer: Reducer<PageStore> = (
  state: PageStore = initialState,
  action: SwitchPageAction
) => {
  switch (action.type) {
    case ActionKey.SWITCH_PAGE:
      const { toPage } = action.payload
      return {...state, currentPage: toPage}
    default: return state
  }
}

export default pageReducer