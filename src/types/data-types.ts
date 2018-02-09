export enum Location {
  TimesSquare = 'Times Square',
  PortAuthority = 'Port Authority',
  HeraldSquare = 'Herald Square',
  UnionSquare = 'Union Square',
  NONE = 'NONE'
}

export interface Performance {
  location: Location
  date: string
  time: string
  singerIDs?: string[]
}