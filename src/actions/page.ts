export enum Pages {
  Home = 'Home',
  SignIn = 'SignIn',
  UpcomingPerformances = 'Upcoming Performances'
}

export const SwitchPageActionType = 'Switch Page'
export type SwitchPageActionType = typeof SwitchPageActionType

interface SwitchPageAction {
  type: SwitchPageActionType,
  payload: {
    toPage: Pages
  }
}
export const switchPage = (toPage: string | Pages) => {
  return {
    type: SwitchPageActionType,
    payload: { toPage }
  }
}

type PageAction = SwitchPageAction
export default PageAction