import PerformanceState from './performance'
import PageState from './page'
import AuthState from './auth'

interface StoreState {
  performanceState: PerformanceState
  pageState: PageState
  authState: AuthState
}

export default StoreState