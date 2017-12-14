import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import App from './Components/App'
import createStore from './Redux'
import './index.css'

import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'

// Create a history : browser history in this case
const history = createHistory()

const store = createStore(history)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
