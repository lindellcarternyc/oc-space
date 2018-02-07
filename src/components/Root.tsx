import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { configureStore, saveStore } from '../redux/configure-store'
import App from '../App'

const store = configureStore()
store.subscribe(() => {
  saveStore(store.getState())
})

const Root = () => {
    return (
      <Provider store={store}>
        <Router >
          <App />
        </Router>
      </Provider>
    )
}

export default Root