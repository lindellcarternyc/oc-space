import { Performance, Location } from '../types'

const Performances: Performance[] = [
  {
    date: 'Fri, Februrary 2',
    location: Location.PortAuthority,
    time: '6 - 9PM'
  },
  {
    date: 'Mon, February 5',
    location: Location.TimesSquare,
    time: '6 - 10PM'
  },
  {
    date: 'Thu, February 8',
    location: Location.PortAuthority,
    time: '6 - 9PM'
  }
]

export default Performances
export const getPerformances = () => Performances