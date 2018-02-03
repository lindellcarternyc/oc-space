import { Reducer } from 'redux'
import AuthAction, { SignInActionType } from '../actions/auth'
import AuthState from '../store/auth'

import { getUserByEmail } from '../data'

const initialState: AuthState = {
  user: getUserByEmail('lindellcarternyc@gmail.com')
}

const authReducer: Reducer<AuthState> = (
  state: AuthState = initialState,
  action: AuthAction
) => {
  switch (action.type) {
    case SignInActionType:
      const { user } = action.payload
      return { ...state, user }
    default: return state
  }
}

export default authReducer