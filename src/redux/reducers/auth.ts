import AuthState from '../state/auth-state'
import AuthAction, { SignInActionType, SignOutActionType } from '../../actions/auth-actions'

const initialState: AuthState = {
  user: null
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