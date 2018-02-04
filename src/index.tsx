import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

import Root from './components/Root'

ReactDOM.render(
  (
    <Root />
  ),
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
