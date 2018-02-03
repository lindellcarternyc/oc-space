import * as React from 'react'

import { Container } from 'semantic-ui-react'

import Navbar from '../navbar'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import StoreState from '../../store/state'
import { navigateToPage } from '../../actions/navigation-actions'
import * as NavigationTypes from '../../types/navigation-types'

interface PageProps {
  authenticated: boolean
  signinCallback: () => void
  addPerformanceCallback: () => void
  upcomingPerformancesCallback: () => void
  children: React.ReactNode
}
const Page = (props: PageProps): JSX.Element => {
  const { authenticated } = props
  return (
    <div>
      <Navbar
        authenticated={authenticated}
      />
      <Container style={{marginTop: '4em'}}>
        {props.children}
      </Container>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
  return {
    signinCallback: () => {
      dispatch(navigateToPage(NavigationTypes.Page.SignInPage))
    },
    addPerformanceCallback: () => {
      dispatch(navigateToPage(NavigationTypes.Page.AddPerformance))
    },
    upcomingPerformancesCallback: () => {
      dispatch(navigateToPage(NavigationTypes.Page.UpcomingPerformances))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Page)