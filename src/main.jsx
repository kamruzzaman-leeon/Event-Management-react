import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import Routers from './routers/Routers'
import AuthProvider from './providers/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
       <RouterProvider router={Routers}></RouterProvider>
     </AuthProvider> 
  </React.StrictMode>,
)
