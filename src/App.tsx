import * as React from 'react'

import Page from './components/page'

class App extends React.Component<{}, {authenticated: boolean}> {
  state = {
    authenticated: false
  }

  render() {
    return (
      <div className='App'>
        <Page authenticated={this.state.authenticated}/>
      </div>
    )
  }
}

export default App
