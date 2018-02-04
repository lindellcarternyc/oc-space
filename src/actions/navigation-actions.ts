import { Navigation } from '../types'

export const NavigateToPageActionType = 'Navigate to Page'
export type NavigateToPageActionType = typeof NavigateToPageActionType

interface NavigateToPageAction {
  type: NavigateToPageActionType,
  payload: {
    destination: Navigation.Page
  }
}

export const navigateToPage = (destination: Navigation.Page): NavigateToPageAction => {
  return {
    type: NavigateToPageActionType,
    payload: { destination }
  }
}

type NavigationAction = NavigateToPageAction
export default NavigationAction