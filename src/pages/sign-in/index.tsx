import * as React from 'react'

import { Header } from 'semantic-ui-react'
import SignInForm from './sign-in-form'

import { User } from '../../types/user-types'

import { connect } from 'react-redux'
import { Dispatch } from 'redux' 
import StoreState from '../../store/state'
import { signIn } from '../../actions/auth-actions'

import { RouteComponentProps, withRouter } from 'react-router-dom'

interface SignInProps extends RouteComponentProps<{}> {
  signIn: (user: User) => void
}
class SignIn extends React.Component<SignInProps & SignInProps> {
  constructor(props: SignInProps) {
    super(props) 
  }

  onSubmit = (user: User) => {
    this.props.signIn(user)
    this.props.history.replace('/')
  }
  render() {
    return (
      <div>
        <Header as='h2' content='Sign In' />
        <SignInForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
  return {
    signIn: (user: User) => {
      dispatch(signIn(user))
    }
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignIn)
)