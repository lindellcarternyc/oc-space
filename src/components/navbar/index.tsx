import * as React from 'react'

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

interface NavbarProps {
  authenticated: boolean
  signinCallback: () => void
  upcomingPerformancesCallback: () => void
  addPerformanceCallback: () => void
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
        <Menu.Item 
          content='Upcoming Performances'
          onClick={props.upcomingPerformancesCallback}
        />
        {authenticated === false && 
          <NavbarAuthMenu 
            didClickSignIn={props.signinCallback}
            didClickSignUp={() => console.dir('signup')}
          />
        }
        {authenticated === true &&
          <NavbarAdminMenu
            addPerformanceCallback={props.addPerformanceCallback}
          />
        }
      </Container>
    </Menu>
  )
}

export default Navbar