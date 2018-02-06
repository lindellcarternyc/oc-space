import * as React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'semantic-ui-react'

const HomePage = () => (
  <div>
    <h1 style={{fontSize: '8em'}}>Opera Collective Space</h1>
      <Link to='upcoming-performances' >
        <Button 
          content='Upcoming Performances'
          color='blue'
        />
      </Link>
  </div>
)

export default HomePage