import React from 'react'
import ReactDOM from 'react-dom/client'


import { router } from './Routes/index.jsx'
import { RouterProvider } from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import "../styles/navbar.scss"
import "../styles/register.scss"
import 'react-toastify/dist/ReactToastify.css';
import "../styles/common/card.scss"
import "../styles/categories.scss"
import "../styles/addtocart.scss"
import 'tailwindcss/tailwind.css';

import { ProductsApi } from './context/productsApi.jsx'
import { CartApi } from './context/CartsApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <ProductsApi>
<CartApi>
  <React.StrictMode> 
    <ToastContainer/>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
  </CartApi>
  </ProductsApi>
  )
