import { Performance, Location } from '../types'

const Performances: {[id: string]: Performance} = {
  'a': {
    date: 'Thu, February 8',
    location: Location.PortAuthority,
    time: '6 - 9 PM'
  },
  'b': {
    date: 'Mon, February 12',
    location: Location.UnionSquare,
    time: '6 - 9 PM'
  },
  'c': {
    date: 'Tue, February 13',
    location: Location.HeraldSquare,
    time: '6 - 9 PM'
  },
  'd': {
    date: 'Fri, February 16',
    location: Location.PortAuthority,
    time: '6 - 9 PM'
  },
  'e': {
    date: 'Mon, February 19',
    location: Location.TimesSquare,
    time: '6 - 10 PM'
  },
  'f': {
    date: 'Fri, February 23',
    location: Location.PortAuthority,
    time: '6 - 9 PM'
  }
}

export default Performances
export const getPerformances = () => Performances