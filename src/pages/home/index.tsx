import * as React from 'react'

import { Button } from 'semantic-ui-react'

import Page from '../../components/page'

const Home = () => {
  return (
    <Page 
      authenticated={false}
    >
      <h1 style={{fontSize: '8em'}}>Opera Collective Space</h1>
      <Button 
        content='Upcoming Performances'
        color='blue'
      />
    </Page>
  )
}

export default Home