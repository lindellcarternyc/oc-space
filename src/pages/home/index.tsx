import * as React from 'react'

import { Button } from 'semantic-ui-react'

import Page from '../../components/page'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import StoreState from '../../store/state'
import { navigateToPage } from '../../actions/navigation-actions'
import { Page as NaviagtionPage } from '../../types/navigation-types'

interface HomeProps {
  goToUpcomingPerformances: () => void
}
const Home = (props: HomeProps) => {
  return (
    <Page>
      <h1 style={{fontSize: '8em'}}>Opera Collective Space</h1>
      <Button 
        content='Upcoming Performances'
        color='blue'
        onClick={props.goToUpcomingPerformances}
      />
    </Page>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
  return {
    goToUpcomingPerformances: () => {
      dispatch(
        navigateToPage(NaviagtionPage.UpcomingPerformances)
      )
    }
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Home)