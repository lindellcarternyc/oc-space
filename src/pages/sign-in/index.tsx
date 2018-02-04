import * as React from 'react'

import { Header } from 'semantic-ui-react'
import Page from '../../components/page'
import SignInForm from './sign-in-form'

import { User } from '../../types/user-types'

import { connect } from 'react-redux'
import { Dispatch, } from 'redux' 
import StoreState from '../../store/state'
import { signIn } from '../../actions/auth-actions'

import { navigateToPage } from '../../actions/navigation-actions'
import * as NavTypes from '../../types/navigation-types'

interface SignInProps {
  signIn: (user: User) => void
  goToHome: () => void
}
class SignIn extends React.Component<SignInProps> {
  constructor(props: SignInProps) {
    super(props) 
  }

  onSubmit = (user: User) => {
    this.props.signIn(user)
    this.props.goToHome()
  }
  render() {
    return (
      <Page>
        <Header as='h2' content='Sign In' />
        <SignInForm onSubmit={this.onSubmit}/>
      </Page>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
  return {
    signIn: (user: User) => {
      dispatch(signIn(user))
    },
    goToHome: () => {
      dispatch(navigateToPage(NavTypes.Page.HomePage))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignIn)