import * as React from 'react'

import { Form, Input, Message } from 'semantic-ui-react'
import * as Utils from '../../utils'
import { User } from '../../types/user-types'
import { getUserForEmail } from '../../data/user-data'

interface SignInFormProps {
  onSubmit: (user: User) => void
}
interface SignInFormState {
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
class SignInForm extends React.Component<SignInFormProps, SignInFormState> {
  constructor(props: SignInFormProps) {
    super(props)

    this.state = {
      email: {
        value: 'lindellcarternyc@gmail.com',
        error: undefined
      },
      password: {
        value: 'password1',
        error: undefined
      },
      error: undefined
    }
  }
  isValid() {
    const { email, password, error } = this.state

    return Utils.isValidEmail(email.value) && Utils.isValidPassword(password.value) && error === undefined
  }

  onSubmit = (evt: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>) => {
    evt.stopPropagation()
    evt.preventDefault()

    if (this.isValid()) {
      const { email, password } = this.state
      const user = getUserForEmail(email.value)
      if (user !== null) {
        if (user.password && user.password === password.value) {
          this.props.onSubmit(user)
        }
      }
    } else {
      return
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

  validateEmail() {
    let { email } = this.state

    const validEmail = Utils.isValidEmail(email.value)
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

    if (Utils.isValidPassword(password.value)) {
      password = {...password, error: undefined}
    } else {
      password = {...password, error: 'Invalid password'}
    }

    this.setState({password}, () => {
      this.handleErrors()
    })
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

  render() {
    const { error } = this.state
    return (
      <Form warning={error !== undefined} onSubmit={this.onSubmit}>
          <Form.Field 
            label='Email' 
            control={Input}
            name='email'
            onChange={this.handleChange}
          />
          <Form.Field 
            label='Password' 
            control={Input} 
            type='password'
            name='password'
            onChange={this.handleChange}
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
    )
  }
}

export default SignInForm