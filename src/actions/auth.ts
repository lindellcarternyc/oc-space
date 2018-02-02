export const SignInActionType = 'Sign In Action'
export type SignInActionType = typeof SignInActionType

import { User } from '../types'
interface SignInAction {
  type: SignInActionType,
  payload: {
    user: User
  }
}

export const signIn = (user: User): SignInAction => {
  return {
    type: SignInActionType,
    payload: { user }
  }
}

type AuthAction = SignInAction
export default AuthAction