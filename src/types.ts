export interface Performance {
  image: string
  location: string
  date: string
  time: string
}

export interface User {
  email: string
  password: string
}

export enum Location {
  TimesSquare = 'Times Square',
  PortAuthority = 'Port Authority',
  HeraldSquare = 'Herald Square',
  UnionSquare = 'Union Square'
}