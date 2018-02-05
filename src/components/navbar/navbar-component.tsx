import * as React from 'react'
import { Link } from 'react-router-dom'

import { Menu, Button, Container } from 'semantic-ui-react'

interface NavbarAuthMenuProps {
  didClickSignUp: () => void
}

const NavbarAuthMenu = (props: NavbarAuthMenuProps) => {
  const { didClickSignUp } = props
  return (
    <Menu.Menu position='right'>
      <Link to='/sign-in'>
        <Menu.Item as='a' name='Sign In' />
      </Link>
      <Menu.Item 
        content={(
          <Button content='Sign Up' basic inverted onClick={didClickSignUp}/>
        )} 
      />
    </Menu.Menu>
  )
}

interface NavbarAdminMenuProps {
  
}
const NavbarAdminMenu = (props: NavbarAdminMenuProps) => {
  return (
    <Menu.Menu position='right'>
      <Link to='/add-performance'>
        <Menu.Item content='Add Performance' />
      </Link>
    </Menu.Menu>
  )
}

export interface NavbarComponentProps {
  authenticated: boolean
}

const NavbarComponent = (props: NavbarComponentProps): JSX.Element => {
  console.dir(props)
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
        <Link to='/'>
          <Menu.Item icon='home' />
        </Link>
        <Link to='/upcoming-performances'>
          <Menu.Item 
            content='Upcoming Performances'
          />
        </Link>
        {authenticated === false && 
          <NavbarAuthMenu 
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

export default NavbarComponent