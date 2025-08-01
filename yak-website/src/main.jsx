import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hyderabad from './Friday.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hyderabad />
  </StrictMode>,
)
