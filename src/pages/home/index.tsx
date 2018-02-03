import * as React from 'react'

import { Button } from 'semantic-ui-react'

import Page from '../../components/page'

interface HomeProps {
  addPerformanceCallback: () => void
  signinCallback: () => void
  upcomingPerformancesCallback: () => void
  isAuthenticated: boolean
}
const Home = (props: HomeProps) => {
  const addPerformanceCallback = () => {
    if (props.isAuthenticated) {
      props.addPerformanceCallback()
    } else {
      return
    }
  }
  return (
    <Page 
      addPerformanceCallback={addPerformanceCallback}
      authenticated={props.isAuthenticated}
      signinCallback={props.signinCallback}
      upcomingPerformancesCallback={props.upcomingPerformancesCallback}
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