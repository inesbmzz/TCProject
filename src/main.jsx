import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import{BrowserRouter} from "react-router-dom"
import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import userReducer from "./features/user"

const store = configureStore({
  reducer : {
      user : userReducer
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
