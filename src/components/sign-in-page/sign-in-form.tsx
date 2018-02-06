import * as React from 'react'

import { 
  Form, Input
} from 'semantic-ui-react'
import SignInFormWarning from './sign-in-form-warning'

import { isValidEmailValue, isValidPasswordValue } from '../../utils/auth-utils'

interface SignInFormProps {
  onSubmit: (data: {email: string, password: string}) => void
}
interface SignInFormState {
  email?: string
  password?: string
  errors: {
    email: string | null
    password: string | null
  }
}

class SignInForm extends React.Component<SignInFormProps, SignInFormState> {
  constructor(props: SignInFormProps) {
    super(props)

    this.state = {
      email: undefined,
      password: undefined,
      errors: {
        email: null,
        password: null
      }
    }
  }

  onChangeInput = (
    evt: React.SyntheticEvent<HTMLInputElement>, data: { name: string, value: string }
  ) => {
    const name = data.name as 'email' | 'password'
    const value = data.value
    this.onChangeField({name, value})
  }

  onChangeField = (field: {name: 'email' | 'password' , value: string}) => {
    const { name, value } = field
    let state = this.state
    switch ( name ) {
      case 'email':
        state = { ...state, email: value}
        break
      case 'password':
        state = { ...state, password: value}
        break
      default: return
    }

    this.setState(state, () => {
      this.checkForErrors(name)
    })
  }

  isFieldValueValid = (field: { name: string, value: string | undefined}): boolean => {
    const { name, value } = field
    
    switch (name) {
      case 'email':
        return value !== undefined && isValidEmailValue(value)

      case 'password':
        return value !== undefined && isValidPasswordValue(value)
      default: return false
    }
  }

  checkForErrors = (fieldName: string) => {
    const field = { name: fieldName, value: this.state[fieldName]}
    let errors = this.state.errors
    if ( this.isFieldValueValid(field) ) {
      errors = { ...errors, [fieldName]: null}
    } else {
      errors = { ...errors, [fieldName]: `error in ${fieldName}`}
    }
    this.setState({errors})
  }

  onSubmit = (evt: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    if (this.isValid()) {
      const { email, password } = this.state
      const data = {email: email!, password: password!}
      this.props.onSubmit(data)
    }
  }

  isValid = () => {
    const { email, password } = this.state
    return this.isFieldValueValid({name: 'email', value: email}) &&
           this.isFieldValueValid({name: 'password', value: password })

  }

  warn() {
    const { errors } = this.state
    let field: 'email' | 'password' | null = null
    let error: string | null = null

    if (errors.email !== null) {
      field = 'email'
      error = 'Please enter a valid email!'
    } else if (errors.password !== null) {
      field = 'password'
      error = 'That password is too short'
    }

    if (field !== null && error !== null) {
      return (
        <SignInFormWarning 
          fieldName={field}
          error={error}
        />
      )
    }
    return null
  }

  render() {
    const submitButtonDisabled = !this.isValid()
    const warning = !this.isValid()
    return (
      <Form onSubmit={this.onSubmit} warning={warning}>
        <Form.Field 
          label='Email'
          name='email'
          control={Input}
          value={this.state.email}
          onChange={this.onChangeInput}
        />
        <Form.Field 
          label='Password'
          name='password'
          control={Input}
          type='password'
          value={this.state.password}
          onChange={this.onChangeInput}
        />
        {this.warn()}
        <Form.Group>
          <Form.Button 
            content='Sign In'
            color='blue'
            onClick={this.onSubmit}
            disabled={submitButtonDisabled}
          />
          <Form.Button 
            content='Cancel'
            color='black'
          />
        </Form.Group>
      </Form>
    )
  }
}

export default SignInForm