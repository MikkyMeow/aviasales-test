import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

// const searchId = axios.get('https://front-test.beta.aviasales.ru/search').then((e) => console.log(e.data.searchId))
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
