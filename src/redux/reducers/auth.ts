import AuthState from '../state/auth-state'
import AuthAction, { SignInActionType, SignOutActionType } from '../actions/auth/types'
import { getUserFromSessionStorage } from '../../session-storage'

const initialState: AuthState = {
  user: getUserFromSessionStorage() || null
}

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case SignInActionType:
      return { ...state, user: action.payload.user}
    case SignOutActionType:
      return { ...state, user: null}
    case SignOutActionType:

    default:
      return state
  }
}

export default authReducer
export const isAuthenticated = (state: AuthState): boolean => {
  return state.user !== null
}