import * as React from 'react'

import { Container } from 'semantic-ui-react'

import Navbar from '../navbar'

interface PageProps {
  children: React.ReactNode
}
const Page = (props: PageProps): JSX.Element => {
  return (
    <div>
      <Navbar/>
      <Container style={{marginTop: '4em'}}>
        {props.children}
      </Container>
    </div>
  )
}

export default Page