import PerformancesState from './performances-state'
import AuthState from './auth-state'

export default interface State {
  performances: PerformancesState,
  auth: AuthState
}