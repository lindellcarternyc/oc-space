import * as React from 'react'

import { Container } from 'semantic-ui-react'

import Navbar from '../navbar'

interface PageProps {
  authenticated: boolean
  signinCallback: () => void
  upcomingPerformancesCallback: () => void
  children: React.ReactNode
}
const Page = (props: PageProps): JSX.Element => {
  const { authenticated } = props
  return (
    <div>
      <Navbar 
        authenticated={authenticated}
        signinCallback={props.signinCallback}
        upcomingPerformancesCallback={props.upcomingPerformancesCallback}
      />
      <Container style={{marginTop: '4em'}}>
        {props.children}
      </Container>
    </div>
  )
}

export default Page