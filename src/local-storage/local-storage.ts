export const getStateFromLocalStorage = () => {
  try {
    const state = localStorage.getItem('oc-space')
    if (state !== null) {
      console.dir(state)
      return JSON.parse(state)
    } else {
      return undefined
    }
  } catch (err) {
    console.dir(err)
    return undefined
  }
}

import { Performance } from '../types'
interface Performances {
  [id: string]: Performance
}
export const setStateToLocalStorage = (performances: Performances) => {
  try {
    const data = JSON.stringify(performances)
    localStorage.setItem('oc-space', data)
  } catch (err) {
    console.dir(err)
  }
}