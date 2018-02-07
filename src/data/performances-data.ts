import { Performance, Location } from '../types'

const Performances: {[id: string]: Performance} = {
  'a': {
    date: 'Fri, Februrary 2',
    location: Location.PortAuthority,
    time: '6 - 9PM'
  },
  'b': {
    date: 'Mon, February 5',
    location: Location.TimesSquare,
    time: '6 - 10PM'
  },
  'c': {
    date: 'Thu, February 8',
    location: Location.PortAuthority,
    time: '6 - 9PM'
  }
}

export default Performances
export const getPerformances = () => Performances