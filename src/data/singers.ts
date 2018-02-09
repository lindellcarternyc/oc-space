import Singer from '../types/singer'

const Singers: {[id: string]: Singer} = {
  'a': { name: 'Anna V.' },
  'b': { name: 'Cassandra' },
  'c': { name: 'Lindell' },
  'd': { name: 'Alexis' },
  'e': { name: 'José' },
  'f': { name: 'Erica' },
  'g': { name: 'Jonathan' },
  'h': { name: 'Rachel' }
}

export const getSingers = () => Singers

export const getSingersAsList = (): Singer[] => {
  return Object.keys(Singers).reduce<Singer[]>(
      (singers, id) => {
        const singer = Singers[id]
        singers.push(singer)
        return singers
  },  [])
}

export const getSingerById = (id: string) => Singers[id]

export const getSingersByIds = (...ids: string[]) => {
  return ids.map(id => getSingerById(id))
}