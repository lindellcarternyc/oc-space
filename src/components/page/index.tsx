import * as React from 'react'

import { Container } from 'semantic-ui-react'

import Navbar from '../navbar'

interface PageProps {
  authenticated: boolean
  signinCallback: () => void
  children: React.ReactNode
}
const Page = (props: PageProps): JSX.Element => {
  const { authenticated } = props
  return (
    <div>
      <Navbar 
        authenticated={authenticated}
        signinCallback={props.signinCallback}
      />
      <Container style={{marginTop: '4em'}}>
        {props.children}
      </Container>
    </div>
  )
}

export default Page