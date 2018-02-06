export const isValidEmail = (email: string): boolean => {
  const emailRe =  	
  // tslint:disable-next-line:max-line-length
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return email.match(emailRe) !== null
}

export const isValidPassword = (password: string): boolean => {
  return password.length >= 5 && password.length <= 10
}

export { default as ImageUtils } from './image-utils'
export { isValidEmailValue } from './auth-utils'