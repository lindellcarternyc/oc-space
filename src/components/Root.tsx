import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { configureStore } from '../redux/configure-store'
import LocalStorage from '../services/local-storage'
import SessionStorage from '../services/session-storage'
import App from '../App'

const store = configureStore()
store.subscribe(() => {
  const { performances, auth } = store.getState()
  LocalStorage.setSlice('performances', performances)
  SessionStorage.setSlice('user', auth.user || {})
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