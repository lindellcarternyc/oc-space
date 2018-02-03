import * as React from 'react'

import { connect, } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import StoreState from './store/store-state'

import { switchPage, Pages } from './actions/page'
import { signIn } from './actions/auth'

import { Performance } from './types'

import Home from './pages/home'
import Signin from './pages/sign-in'
import UpcomingPerformances from './pages/upcoming-performances'
import AddPerformance from './pages/add-performance'

import { User } from './types'
import { getUserByEmail } from './data'

interface AppProps {
  currentPage: string
  switchPage: (toPage: string) => void

  performances: Performance[]

  signIn: (user: User) => void
  user: User | null
}
class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props)
  }

  get isAuthenticated(): boolean {
    return this.props.user !== null
  }

  // arrow funtion for lexical this binding
  goToSignIn = () => {
    this.props.switchPage(Pages.SignIn)
  }

  goToUpcomingPerformances = () => {
    this.props.switchPage(Pages.UpcomingPerformances)
  }

  goToAddPerformace = () => {
    this.props.switchPage(Pages.AddPerformance)
  }

  handleSignIn = (email: string, password: string) => {
    const user = getUserByEmail(email)
    if (user !== null) {
      if (user.password === password) {
        this.props.signIn(user)
        this.props.switchPage(Pages.Home)
      }
    }
  }

  renderCurrentPage(): JSX.Element | null {
    const { currentPage } = this.props
    switch (currentPage) {
      case Pages.Home:
        return (
          <Home
            addPerformanceCallback={this.goToAddPerformace}
            isAuthenticated={this.isAuthenticated}
            signinCallback={this.goToSignIn}
            upcomingPerformancesCallback={this.goToUpcomingPerformances}
          />
        )
      case Pages.SignIn:
        return (
          <Signin
            isAuthenticated={this.isAuthenticated}
            handleSignIn={this.handleSignIn}
            upcomingPerformancesCallback={this.goToUpcomingPerformances}
          />
        )
      case Pages.UpcomingPerformances:
        return (
          <UpcomingPerformances
            addPermanceCallback={this.goToAddPerformace}
            isAuthenticated={this.isAuthenticated}
            performances={this.props.performances}
            signinCallback={this.goToSignIn}
          />
        )
      case Pages.AddPerformance:
        if (this.isAuthenticated) {
          return (
            <AddPerformance 
              signinCallback={() => { return }}
              upcomingPerformacesCallback={this.goToUpcomingPerformances}
              isAuthenticated={this.isAuthenticated}
            />
          )
        } else {
          return null
        }
      default: return null
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
  const { pageState, performanceState, authState } = state
  return {
    currentPage: pageState.currentPage,
    performances: performanceState.performances,
    user: authState.user
  }
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
  return {
    switchPage: bindActionCreators(switchPage, dispatch),
    signIn: bindActionCreators(signIn, dispatch)
  }
}

export default connect<{}, {}, AppProps>(
  mapStateToProps,
  mapDispatchToProps
)(App) as React.ComponentClass<{}>
