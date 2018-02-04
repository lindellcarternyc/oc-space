import { Navigation } from '../types'

interface NavigationState {
  currentPage: Navigation.Page
  previousPage: Navigation.Page | null
  history: Navigation.Page[]
}

export default NavigationState