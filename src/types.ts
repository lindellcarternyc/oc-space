export interface Performance {
  image: string
  location: string
  date: string
  time: string
}

export interface User {
  email: string
}

export interface StoreState {
  performanceStore: {
    performances: Performance[]
  }
}