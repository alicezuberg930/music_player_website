import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import reduxConfig from './redux'
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from 'redux-persist/integration/react'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
const { store, persistStore } = reduxConfig()

root.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistStore}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)