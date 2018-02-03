import * as React from 'react'

import { Header, Form, Input, Message } from 'semantic-ui-react'

import Page from '../../components/page'

import { isValidEmail, isValidPassword } from '../../utils'

interface SignInState {
  email: {
    value: string
    error?: string | undefined
  }
  password: {
    value: string
    error?: string | undefined
  }
  error?: {
    title: string
    message: string
  } | undefined
}
interface SignInProps {
  isAuthenticated: boolean
}
class SignIn extends React.Component<SignInProps, SignInState> {
  constructor(props: SignInProps) {
    super(props)

    this.state = {
      email: {
        value: '',
        error: undefined
      },
      password: {
        value: '',
        error: undefined
      },
      error: undefined
    }
  }

  handleChange = (evt: React.SyntheticEvent<HTMLInputElement>, data: {name: string, value: string}) => {
    const { name, value } = data
    
    switch (name) {
      case 'email':
        const email = {...this.state.email, value}
        this.setState({email}, () => {
          this.validateEmail()
        })
        break

      case 'password':
        const password = {...this.state.password, value}
        this.setState({password}, () => {
          this.validatePassword()
        })
        break

      default: return
    }
  }

  onBlur = (evt: React.SyntheticEvent<HTMLInputElement>) => {
    switch (evt.currentTarget.name) {
      case 'email':
        this.validateEmail()
        break
      
      case 'password':
        this.validatePassword()
        break
      default: return
    }
  }

  validateEmail() {
    let { email } = this.state

    const validEmail = isValidEmail(email.value)
    if (validEmail) {
      email = {...email, error: undefined}
    } else {
      email = {...email, error: 'Invalid email'}
    }

    this.setState({email}, () => {
      this.handleErrors()
    })
  }

  validatePassword() {
    let { password } = this.state

    if (isValidPassword(password.value)) {
      password = {...password, error: undefined}
    } else {
      password = {...password, error: 'Invalid password'}
    }

    this.setState({password}, () => {
      this.handleErrors()
    })
  }

  isValid() {
    const { email, password, error } = this.state

    return isValidEmail(email.value) && isValidPassword(password.value) && error === undefined
  }

  handleErrors() {
    const { email, password } = this.state
    const emailError = email.error
    const passwordError = password.error

    let error: {title: string, message: string} | undefined
    
    if (emailError) {
      if (emailError === 'Invalid email') {
        error = {
          title: emailError,
          message: 'Please enter a valid email'
        }
        this.setState({error})
      }
    } else if (passwordError) {
      if (passwordError === 'Invalid password') {
        error = {
          title: passwordError,
          message: 'Please enter a valid password'
        }
        this.setState({error})
      }
    } else {
      this.setState({error: undefined})
    }
  }

  onSubmit = (evt: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>) => {
    evt.stopPropagation()
    evt.preventDefault()

    if (this.isValid()) {
      const { email, password } = this.state
      console.dir('submit signin creds')
      console.dir({email, password})
    } else {
      return
    }
  }

  render() {
    const { error } = this.state
    return (
      <Page
        authenticated={this.props.isAuthenticated}
      >
        <Header as='h2' content='Sign In' />
        <Form warning={error !== undefined} onSubmit={this.onSubmit}>
          <Form.Field 
            label='Email' 
            control={Input}
            name='email'
            onChange={this.handleChange}
            onBlur={this.onBlur}
          />
          <Form.Field 
            label='Password' 
            control={Input} 
            type='password'
            name='password'
            onChange={this.handleChange}
            onBlur={this.onBlur}
          />
          <Message 
            warning
            header={error ? error.title : null}
            content={error ? error.message : null}
          />
          <Form.Group>
            <Form.Button 
              content='Sign In' 
              color='blue' 
              disabled={!this.isValid()}
              onClick={this.onSubmit}
            />
            <Form.Button content='Cancel' color='black'/>
          </Form.Group>
        </Form>
      </Page>
    )
  }
}

export default SignIn