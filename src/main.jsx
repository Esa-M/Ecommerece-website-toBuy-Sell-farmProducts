import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Aos from 'aos'
import'aos/dist/aos.css'
import { BrowserRouter } from 'react-router-dom'
Aos.init({duration:1500})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
   </BrowserRouter>
)
