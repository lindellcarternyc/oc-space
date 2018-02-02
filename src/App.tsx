import * as React from 'react'

import { connect, } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import StoreState from './store/store-state'
import { switchPage } from './actions'

import Home from './pages/home'
import Signin from './pages/sign-in'

interface AppProps {
  currentPage: string
  switchPage: (toPage: string) => void
}
class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props)
  }

  // arrow funtion for lexical this binding
  goToSignIn = () => {
    this.props.switchPage('Sign In')
  }

  handleSignIn = (email: string, password: string) => {
    console.dir({email, password})
  }

  renderCurrentPage(): JSX.Element | null {
    const { currentPage } = this.props
    switch (currentPage) {
      case 'Home':
        return (
          <Home signinCallback={this.goToSignIn}/>
        )
      case 'Sign In':
        return (
          <Signin handleSignIn={this.handleSignIn}/>
        )
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
  const currentPage = state.pageStore.currentPage
  return {
    currentPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
  return {
    switchPage: bindActionCreators(switchPage, dispatch)
  }
}

export default connect<{}, {}, AppProps>(
  mapStateToProps,
  mapDispatchToProps
)(App) as React.ComponentClass<{}>
