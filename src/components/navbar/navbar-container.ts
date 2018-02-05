import { connect } from 'react-redux'
import StoreState from '../../store/state'
import * as AuthUtils from '../../utils/auth-utils'

const mapStateToProps = (state: StoreState) => {
  const user = state.authState.user
  const authenticated = AuthUtils.isAuthenticated(user)
  return { authenticated}
}

import NavbarComponent  from './navbar-component'

export default connect(
    mapStateToProps
)(NavbarComponent)