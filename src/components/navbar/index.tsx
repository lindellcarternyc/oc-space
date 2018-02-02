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

const NavbarAdminMenu = () => {
  return (
    <Menu.Menu position='right'>
      <Menu.Item content='Add Concert' />
    </Menu.Menu>
  )
}

interface NavbarProps {
  authenticated: boolean
  signinCallback: () => void
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
        <Menu.Item content='Upcoming Performances' />
        {authenticated === false && 
          <NavbarAuthMenu 
            didClickSignIn={props.signinCallback}
            didClickSignUp={() => console.dir('signup')}
          />
        }
        {authenticated === true &&
          <NavbarAdminMenu />
        }
      </Container>
    </Menu>
  )
}

export default Navbar