import { User } from '../types/user-types'

interface AuthState {
  user: User | null
}

export default AuthState