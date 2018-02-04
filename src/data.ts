import { Performance, Location } from './types'

const matthew = require('./assets/images/matthew.png')

const Performances: Performance[] = [
  {
    image: matthew as string,
    date: 'Fri, Februrary 2',
    location: Location.PortAuthority,
    time: '6 - 9PM'
  },
  {
    image: matthew as string,
    date: 'Mon, February 5',
    location: Location.TimesSquare,
    time: '6 - 10PM'
  },
  {
    image: matthew as string,
    date: 'Thu, February 8',
    location: Location.PortAuthority,
    time: '6 - 9PM'
  }
]

export const getPerformances = () => Performances