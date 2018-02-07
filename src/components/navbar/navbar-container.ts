import { connect } from 'react-redux'
import State from '../../redux/state/types'
import { isAuthenticated } from '../../redux/reducers/root'

const mapStateToProps = (state: State) => {
  return {
    authenticated: isAuthenticated(state)
  }
}

import NavbarComponent  from './navbar-component'

export default connect(
    mapStateToProps
)(NavbarComponent)