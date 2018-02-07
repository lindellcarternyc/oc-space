import { Performance } from '../../types'
export default interface PerformancesState {
  performances: {
    [id: string]: Performance
  }
}