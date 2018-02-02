import * as React from 'react'

import Navbar from '../navbar'

const Page = (props: { authenticated: boolean}): JSX.Element => {
  const { authenticated } = props
  return (
    <Navbar 
      authenticated={authenticated}
    />
  )
}

export default Page