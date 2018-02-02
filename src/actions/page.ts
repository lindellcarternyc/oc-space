import ActionKey from './actionKeys'

interface SwitchPageAction {
  type: ActionKey.SWITCH_PAGE
  payload: {
    toPage: 'Sign In' | 'Home'
  }
}

export default SwitchPageAction