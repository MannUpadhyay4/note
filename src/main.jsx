import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './NewDayHeader.jsx'
import App_EC from './app_EC.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App_EC/>
  </StrictMode>
)
