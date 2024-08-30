import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Route>
    <App />

    </Route> */}
    <App />
  </StrictMode>,
)
