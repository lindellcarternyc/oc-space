import { User, UserType } from '../types/user-types'

export const isAuthenticated = (user: User | null): boolean => {
  if (user !== null) {
    return user.type === UserType.Admin || user.type === UserType.Singer
  } else {
    return false
  }
}