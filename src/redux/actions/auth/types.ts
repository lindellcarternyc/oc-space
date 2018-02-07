import { User } from '../../../types'

export const SignInActionType = 'SIGN_IN'
export type SignInActionType = typeof SignInActionType
export interface SignInAction {
  type: SignInActionType,
  payload: {
    user: User
  }
}

export const SignOutActionType = 'SIGN_OUT'
export type SignOutActionType = typeof SignOutActionType
export interface SignOutAction {
  type: SignOutActionType
}

type AuthAction = SignInAction | SignOutAction
export default AuthAction