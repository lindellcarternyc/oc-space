import { Reducer } from 'redux'
import PageAction, { SwitchPageActionType, Pages } from '../actions/page'
import PageState from '../store/page'

const initialState: PageState = {
  currentPage: Pages.Home
}

const pageReducer: Reducer<PageState> = (
  state: PageState = initialState, action: PageAction
) => {
  switch (action.type) {
    case SwitchPageActionType:
      const currentPage = action.payload.toPage
      return {...state, currentPage}
    default: return state
  }
}

export default pageReducer