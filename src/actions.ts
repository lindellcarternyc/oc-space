import { Action, ActionCreator } from 'redux'
import { ADD_PERFORMANCE } from './constants'
import { Performance } from './types'

export interface AddPerformance extends Action {
  type: ADD_PERFORMANCE
  performance: Performance
}

export const addPerformance: ActionCreator<AddPerformance> = (performance: Performance) => {
  console.dir('add performance action creator')
  return {
    type: ADD_PERFORMANCE,
    performance
  }
}