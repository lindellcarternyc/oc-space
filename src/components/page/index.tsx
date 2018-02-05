import * as React from 'react'

import { Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../home-page/home-page'
import UpcomingPerformances from '../../pages/upcoming-performances'
import SignIn from '../../pages/sign-in'
import AddPerformance from '../../pages/add-performance'

interface PageProps {
  children?: React.ReactNode
}
const Page = (props: PageProps): JSX.Element => {
  return (
    <div>
      <Container style={{marginTop: '4em'}}>
        <Switch>
          <Route 
            exact
            path='/'
            component={HomePage}
          />
          <Route
            exact
            path='/upcoming-performances'
            component={UpcomingPerformances}
          />
          <Route
            exact
            path='/sign-in'
            component={SignIn}
          />
          <Route 
            exact
            path='/add-performance'
            component={AddPerformance}
          />
        </Switch>
      </Container>
    </div>
  )
}

export default Page