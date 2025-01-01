import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App'

import { BrowserRouter as Router} from 'react-router'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>

  </StrictMode>,
)