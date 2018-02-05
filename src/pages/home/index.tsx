import * as React from 'react'

import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Button } from 'semantic-ui-react'

const Home = (props: RouteComponentProps<{}>) => {
  return (
    <div>
      <h1 style={{fontSize: '8em'}}>Opera Collective Space</h1>
      <Button 
        content='Upcoming Performances'
        color='blue'
      />
    </div>
  )
}

export default withRouter(Home)