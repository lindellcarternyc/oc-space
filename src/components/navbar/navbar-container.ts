import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import StoreState from '../../store/state'
import { navigateToPage } from '../../actions/navigation-actions'
import * as NavTypes from '../../types/navigation-types'
import * as AuthUtils from '../../utils/auth-utils'

const mapStateToProps = (state: StoreState) => {
  const user = state.authState.user
  const authenticated = AuthUtils.isAuthenticated(user)
  return { authenticated}
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
  return {
    navigateToPage: (page: NavTypes.Page) => {
      dispatch(navigateToPage(page))
    }
  }
}

import NavbarComponent  from './navbar-component'

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarComponent)