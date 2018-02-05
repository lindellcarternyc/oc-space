import PerformancesState from './performances-state'
import AuthState from './auth-state'

interface StoreState {
  performancesState: PerformancesState,
  authState: AuthState
}

export default StoreState