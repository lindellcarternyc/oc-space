import { Reducer } from 'redux'

import AuthAction, { SignInActionType, SignOutActionType } from '../actions/auth-actions'
import AuthState from '../store/auth-state'

const initialState: AuthState = {
  user: null
}

const authReducer: Reducer<AuthState> = (
  state: AuthState = initialState,
  action: AuthAction
) => {
  switch (action.type) {
    case SignInActionType:
      return { ...state, user: action.payload.user }

    case SignOutActionType:
      return { ...state, user: null}

    default:
      return state
  }
}

export default authReducer