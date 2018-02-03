import { Page } from '../types/navigation-types'

interface NavigationState {
  currentPage: Page
  previousPage: Page | null
  history: Page[]
}

export default NavigationState