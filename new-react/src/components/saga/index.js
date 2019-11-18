
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import App from './app'
import reducer from './reducer'
import rootSage from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSage);

// const action = type => store.dispatch({type})
console.log(store,'store')
const Index = () =>  {
  return (
    <Provider store = {store}>
      <App />
    </Provider>
  )
}
export default Index