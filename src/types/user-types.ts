export enum UserType {
  Guest = 'Guest',
  Singer = 'Singer',
  Admin = 'Admin'
}

export interface User {
  type: UserType
  email?: string
  password?: string
}

export interface Guest extends User {
  type: UserType.Guest
}

export interface Singer extends User {
  type: UserType.Singer,
  email: string
  password: string
}

export interface Admin extends User {
  type: UserType.Admin
  email: string
  password: string
  isAdmin: true
}