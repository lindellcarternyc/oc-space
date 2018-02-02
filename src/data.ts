import { Performance, User } from './types'

const matthew = require('./assets/images/matthew.png')

const Performances: Performance[] = [
  {
    image: matthew as string,
    date: 'Fri, Februrary 2',
    location: 'Port Authority',
    time: '6 - 9PM'
  },
  {
    image: matthew as string,
    date: 'Mon, February 5',
    location: 'Times Square',
    time: '6 - 10PM'
  },
  {
    image: matthew as string,
    date: 'Thu, February 8',
    location: 'Port Authority',
    time: '6 - 9PM'
  }
]

export const getPerformances = () => Performances

const Users: User[] = [
  {
    email: 'lindellcarternyc@gmail.com',
    password: 'password1'
  }
]

export const getUsers = () => Users
export const getUserByEmail = (email: string): User | null => {
  const filtered = getUsers().filter(user => user.email === email)
  if (filtered.length >= 1) {
    return filtered[0]
  }
  return null
}