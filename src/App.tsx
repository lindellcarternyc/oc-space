import * as React from 'react'

import UpcomingPerformances, { Performance } from './pages/upcoming-performances'
const matthew = require('./assets/images/matthew.png')

const Performances: Performance[] = [
  {
    image: matthew as string,
    date: 'Fri, Februrary 2',
    location: 'Port Authority',
    time: '6 - 9PM'
  },
  {
    image: matthew as string,
    date: 'Mon, February 5',
    location: 'Times Square',
    time: '6 - 10PM'
  },
  {
    image: matthew as string,
    date: 'Thu, February 8',
    location: 'Port Authority',
    time: '6 - 9PM'
  }
]

class App extends React.Component<{}, {authenticated: boolean}> {
  state = {
    authenticated: false
  }

  render() {
    return (
      <div className='App'>
        <UpcomingPerformances performances={Performances}/>
      </div>
    )
  }
}

export default App
