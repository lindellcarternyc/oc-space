import * as React from 'react'

import { Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../home-page/home-page'
import UpcomingPerformancesPage from '../upcoming-performances-page/upcoming-performances-page'
import SignInPage from '../sign-in-page/sign-in-page'
import AddPerformancePage from '../add-performance-page/add-performance-page'
import PerformanceDetailPage from '../performance-detail-page/performance-detail-page'

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
            component={UpcomingPerformancesPage}
          />
          <Route
            exact
            path='/sign-in'
            component={SignInPage}
          />
          <Route 
            exact
            path='/add-performance'
            component={AddPerformancePage}
          />
          <Route 
            path={`/performance-details:id`}
            component={PerformanceDetailPage}
          />
        </Switch>
      </Container>
    </div>
  )
}

export default Page