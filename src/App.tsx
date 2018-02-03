import * as React from 'react'

import PageDisplay from './pages'

interface AppProps {
  
}
interface AppState {
  authenticated: boolean
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      authenticated: false,
    }
  }

  render() {
    return (
      <div>
        <PageDisplay />
      </div>
    )
  }
}

export default App
