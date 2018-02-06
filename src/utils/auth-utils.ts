import { User, UserType } from '../types/user-types'

export const isAuthenticated = (user: User | null): boolean => {
  if (user !== null) {
    return user.type === UserType.Admin || user.type === UserType.Singer
  } else {
    return false
  }
}

export const isValidEmailValue = (email?: string): boolean => {
  const emailRegEx =  	
  // tslint:disable-next-line:max-line-length
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (email !== undefined) {
    return emailRegEx.test(email)
  } else {
    return false
  }
}

export const isValidPasswordValue = (password: string): boolean => {
  return password.length >= 5 && password.length <= 10
}