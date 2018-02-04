import NavigationState from './navigation-state'
import PerformancesState from './performances-state'
import AuthState from './auth-state'

interface StoreState {
  navigationState: NavigationState,
  performancesState: PerformancesState,
  authState: AuthState
}

export default StoreState