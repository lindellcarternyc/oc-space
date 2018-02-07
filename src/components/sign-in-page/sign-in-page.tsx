import * as React from 'react'

import SignInPageComponent  from './sign-in-page-component'

import { User } from '../../types'
import { getUserForEmail } from '../../data/user-data'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import State from '../../redux/state/types'
import { signIn } from '../../redux/actions/auth'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface SignInPageProps extends RouteComponentProps<{}> {
  signIn: (user: User) => void
}

class SignInPage extends React.Component<SignInPageProps> {
  onSubmit = (data: {email: string, password: string}) => {
    const user: User | null = getUserForEmail(data.email)
    if (user !== null) {
      this.props.signIn(user)
      this.props.history.replace('/')
    } else {
      return
    }
  }

  render() {
    return (
      <SignInPageComponent onSubmit={this.onSubmit} />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
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
  )(SignInPage)
)