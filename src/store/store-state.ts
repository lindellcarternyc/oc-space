import { Performance } from '../types'

export interface PerformanceStore {
  performances: Performance[]
}

export interface PageStore {
  currentPage: string
}

interface StoreState {
  performanceStore: PerformanceStore
  pageStore: PageStore
}

export default StoreState