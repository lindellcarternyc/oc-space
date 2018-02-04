import { User } from '../types/user-types'

export const SignInActionType = 'Sign In'
export type SignInActionType = typeof SignInActionType

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

export const SignOutActionType = 'Sign Out'
export type SignOutActionType = typeof SignOutActionType

interface SignOutAction {
  type: SignOutActionType
}

export const signOut = (): SignOutAction => {
  return {
    type: SignOutActionType
  }
}

export type AuthActionType = SignInActionType | SignOutActionType
type AuthAction = SignInAction | SignOutAction
export default AuthAction