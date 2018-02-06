import * as React from 'react'

import { Message } from 'semantic-ui-react'

interface SignInWarningProps {
  fieldName: string
  error: string
}

const SignInFormWarning = (props: SignInWarningProps) => {
  let { fieldName, error } = props
  fieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
  return (
    <Message
      warning
      header={'Error in ' + fieldName}
      content={error}
    />
  )
}

export default SignInFormWarning