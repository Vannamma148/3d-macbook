import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Slide from './Slide.jsx'
import Look from './Look.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
        <Slide/>
  <Look/>
  </StrictMode>,
)
