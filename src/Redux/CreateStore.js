import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'


/*
* Create the store
* */
export default (rootReducer, rootSaga) => {

  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  const store = createStore(rootReducer, enhancers(applyMiddleware(...middleware)))

  // Kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}
