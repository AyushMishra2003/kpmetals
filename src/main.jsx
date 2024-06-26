import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <div className='relative z-[100000000000000000]'>
      <ToastContainer />
    </div>
  </BrowserRouter>

)
