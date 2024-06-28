import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import { CartContextProvider } from './features/CartManager.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <CartContextProvider>
    <App />
    </CartContextProvider>
  </React.StrictMode>
)
