import * as React from 'react'

import { Menu, Button, Container } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { navigateToPage } from '../../actions/navigation-actions'
import { Page } from '../../types/navigation-types'
import StoreState from '../../store/state'

import { isAuthenticated } from '../../utils/auth-utils'

interface NavbarAuthMenuProps {
  didClickSignIn: () => void
  didClickSignUp: () => void
}

const NavbarAuthMenu = (props: NavbarAuthMenuProps) => {
  const { didClickSignIn, didClickSignUp } = props
  return (
    <Menu.Menu position='right'>
      <Menu.Item
        as='a'
        name='Sign In'
        onClick={didClickSignIn}
      />  
      <Menu.Item 
        content={(
          <Button content='Sign Up' basic inverted onClick={didClickSignUp}/>
        )} 
      />
    </Menu.Menu>
  )
}

interface NavbarAdminMenuProps {
  addPerformanceCallback: () => void
}
const NavbarAdminMenu = (props: NavbarAdminMenuProps) => {
  return (
    <Menu.Menu position='right'>
      <Menu.Item content='Add Performance' onClick={props.addPerformanceCallback}/>
    </Menu.Menu>
  )
}

interface NavbarProps {
  authenticated: boolean
  goToUpcomingPerformances: () => void
  goToSignIn: () => void
  goToHome: () => void
  goToAddPerformance: () => void
}
const Navbar = (props: NavbarProps): JSX.Element => {
  const { authenticated } = props
  return (
    <Menu 
      fixed='top' 
      borderless
      size='large'
      color='blue'
      inverted
    >
      <Container>
        <Menu.Item icon='home' onClick={props.goToHome}/>
        <Menu.Item 
          content='Upcoming Performances'
          onClick={props.goToUpcomingPerformances}
        />
        {authenticated === false && 
          <NavbarAuthMenu 
            didClickSignIn={props.goToSignIn}
            didClickSignUp={() => console.dir('signup')}
          />
        }
        {authenticated === true &&
          <NavbarAdminMenu
            addPerformanceCallback={props.goToAddPerformance}
          />
        }
      </Container>
    </Menu>
  )
}

const mapStateToProps = (state: StoreState) => {
  const user = state.authState.user
  const authenticated = isAuthenticated(user)
  return { authenticated }
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
  return {
    goToUpcomingPerformances: () => {
      dispatch(navigateToPage(Page.UpcomingPerformances))
    },
    goToSignIn: () => {
      dispatch(navigateToPage(Page.SignInPage))
    },
    goToHome: () => {
      dispatch(navigateToPage(Page.HomePage))
    },
    goToAddPerformance: () => {
      dispatch(navigateToPage(Page.AddPerformance))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)