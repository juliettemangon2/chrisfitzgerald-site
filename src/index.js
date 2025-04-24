import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const basename = process.env.PUBLIC_URL || '/'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
)
