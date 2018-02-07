import { User } from '../../../types'

import AuthAction, { SignInActionType, SignOutActionType } from './types'

export const signIn = (user: User): AuthAction => {
  return {
    type: SignInActionType,
    payload: { user }
  }
}

export const signOut = (): AuthAction => {
  return {
    type: SignOutActionType
  }
}