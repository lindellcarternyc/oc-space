import { Performance } from '../types'

interface PerformancesState {
  upcomingPerformances: {[_id: string]: Performance}
}

export default PerformancesState