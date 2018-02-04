import * as React from 'react'

import * as NavTypes from '../../types/navigation-types'

import { Menu, Button, Container } from 'semantic-ui-react'

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

export interface NavbarComponentProps {
  authenticated: boolean
  navigateToPage: (page: NavTypes.Page) => void
}

const NavbarComponent = (props: NavbarComponentProps): JSX.Element => {
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
        <Menu.Item icon='home' onClick={() => { props.navigateToPage(NavTypes.Page.HomePage)}}/>
        <Menu.Item 
          content='Upcoming Performances'
          onClick={() => { props.navigateToPage(NavTypes.Page.UpcomingPerformances)}}
        />
        {authenticated === false && 
          <NavbarAuthMenu 
            didClickSignIn={() => props.navigateToPage(NavTypes.Page.SignInPage)}
            didClickSignUp={() => console.dir('signup')}
          />
        }
        {authenticated === true &&
          <NavbarAdminMenu
            addPerformanceCallback={() => props.navigateToPage(NavTypes.Page.AddPerformance)}
          />
        }
      </Container>
    </Menu>
  )
}

export default NavbarComponent