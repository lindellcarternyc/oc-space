import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { Button } from 'semantic-ui-react'

const HomePage = (props: RouteComponentProps<{}>) => (
  <div>
    <h1 style={{fontSize: '8em'}}>Opera Collective Space</h1>
      <Button 
        content='Upcoming Performances'
        color='blue'
        onClick={() => props.history.push('/upcoming-performances')}
      />
  </div>
)

export default withRouter(HomePage)