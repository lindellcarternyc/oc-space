export enum Location {
  TimesSquare = 'Times Square',
  PortAuthority = 'Port Authority',
  HeraldSquare = 'Herald Square',
  UnionSquare = 'Union Square'
}

export interface Performance {
  image: string
  location: Location
  date: string
  time: string
}