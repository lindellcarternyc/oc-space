import * as React from 'react'

import Home from './pages/home'

class App extends React.Component<{}, {authenticated: boolean}> {
  state = {
    authenticated: false
  }

  render() {
    return (
      <div className='App'>
        <Home />
      </div>
    )
  }
}

export default App
