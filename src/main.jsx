import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Product from './components/product.jsx'
import { RouterProvider, createBrowserRouter, BrowserRouter, Route ,Routes,Router} from 'react-router-dom'



const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/product', element: <Product/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
