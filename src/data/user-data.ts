import { 
  User, 
  Admin,
  Singer,
  UserType
} from '../types/user-types'

const Lindell: Admin = {
  type: UserType.Admin,
  email: 'lindellcarternyc@gmail.com',
  password: 'password1',
  isAdmin: true
}

const Jonathan: Singer = {
  type: UserType.Singer,
  email: 'jonathan@gmail.com',
  password: 'password2'
}

const USERS: User[] = [
  Lindell,
  Jonathan
]

export const getUserForEmail = (email: string): User | null => {
  const filtered = USERS.filter(user => user.email && user.email === email)

  return filtered[0] || null
}