import * as React from 'react'

import { Navigation } from '../types'
import Home from './home'
import UpcomingPerformances from './upcoming-performances'
import SignIn from './sign-in'
import AddPerformance from './add-performance'

import StoreState from '../store/state'
import { connect } from 'react-redux'

interface PageDisplayProps {
  currentPage: Navigation.Page
}
class PageDisplay extends React.Component<PageDisplayProps> {
  constructor(props: PageDisplayProps) {
    super(props)
  }

  renderCurrentPage() {
    const { currentPage } = this.props
    
    switch (currentPage) {
      case Navigation.Page.AddPerformance:
        return (
          <AddPerformance />
        )
      case Navigation.Page.UpcomingPerformances:
        return (
          <UpcomingPerformances />
        )
      case Navigation.Page.SignInPage:
        return (
          <SignIn />
        )
      default: 
        return (
          <Home />
        )
    }
  }
  render() {
    return (
      <div>
        {this.renderCurrentPage()}
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    currentPage: state.navigationState.currentPage
  }
}

export default connect(
  mapStateToProps
)(PageDisplay)