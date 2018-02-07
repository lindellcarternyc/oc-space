import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import configureStore from '../redux/configure-store'
import App from '../App'

const store = configureStore()

export default () => (
  <Provider store={store}>
    <Router >
      <App />
    </Router>
  </Provider>
)