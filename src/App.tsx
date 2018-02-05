import * as React from 'react'

import Navbar from './components/navbar'
import Page from './components/page'

interface AppProps {
  
}
interface AppState {
  
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Page />
      </div>
    )
  }
}

export default App
