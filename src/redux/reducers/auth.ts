import AuthState from '../state/auth-state'
import AuthAction, { SignInActionType, SignOutActionType } from '../actions/auth/types'
import SessionStorage from '../../services/session-storage'
import { User } from '../../types'

let initialUser: User | null
const data = SessionStorage.getSlice('user')
if (data !== undefined) {
  // tslint:disable-next-line:no-string-literal
  initialUser = data['user'] as User
} else {
  initialUser = null
}

const initialState: AuthState = {
  user: initialUser
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