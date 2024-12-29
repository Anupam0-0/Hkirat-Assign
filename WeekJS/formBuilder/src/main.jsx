import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import InputContext from './FormContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InputContext />
  </StrictMode>,
)
