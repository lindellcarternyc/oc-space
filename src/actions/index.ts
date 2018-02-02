import ActionKey from './actionKeys'

import { Performance } from '../types'
import  AddPerformanceAction from './performance'

export const addPerformance = (performance: Performance): AddPerformanceAction => {
  return {
    type: ActionKey.ADD_PERFORMANCE,
    payload: {
      performance
    }
  }
}

import PageAction from './page'
export const switchPage = (toPage: string): PageAction => {
  return {
    type: ActionKey.SWITCH_PAGE,
    payload: {
      toPage: toPage as 'Home' | 'Sign In'
    }
  }
}