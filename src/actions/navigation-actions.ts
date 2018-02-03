import { Page } from '../types/navigation-types'

export const NavigateToPageActionType = 'Navigate to Page'
export type NavigateToPageActionType = typeof NavigateToPageActionType

interface NavigateToPageAction {
  type: NavigateToPageActionType,
  payload: {
    destination: Page
  }
}

export const navigateToPage = (destination: Page): NavigateToPageAction => {
  return {
    type: NavigateToPageActionType,
    payload: { destination }
  }
}

type NavigationAction = NavigateToPageAction
export default NavigationAction