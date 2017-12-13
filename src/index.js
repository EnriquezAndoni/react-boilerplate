import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import App from './Components/App'
import createStore from './Redux'
import './index.css'

const store = createStore()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
