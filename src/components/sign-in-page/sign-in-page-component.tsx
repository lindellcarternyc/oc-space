import * as React from 'react'

import { Header } from 'semantic-ui-react'
import SignInForm from './sign-in-form'

interface SignInPageComponentProps {
  onSubmit: (data: {
    email: string, password: string
  }) => void
}

const SignInPageComponent = (props: SignInPageComponentProps) => {
  return (
    <div>
      <Header as='h2' content='Sign In'/>
      <SignInForm onSubmit={props.onSubmit}/>
    </div>
  )
}

export default SignInPageComponent