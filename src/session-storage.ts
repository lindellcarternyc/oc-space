export const getUserFromSessionStorage = () => {
  try {
    const data = sessionStorage.getItem('oc-space')
    if (data !== null) {
      return JSON.parse(data)
    } else {
      return undefined
    }
  } catch (err) {
    console.dir(err)
    return undefined
  }
}

import { User } from './types'
export const saveUserToSessionStorage = (user: User | null) => {
  try {
    const data = JSON.stringify(user)
    sessionStorage.setItem('oc-space', data)
  } catch (err) {
    console.dir(err)
  }
} 