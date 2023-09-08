import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//imports das rotas
import Error404 from './routes/Error404.jsx'
import Home from './routes/Home.jsx'
import VizualizarProduto from './routes/VizualizarProduto.jsx'
import Aparelhos from './routes/Aparelhos.jsx'


const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    errorElement: <Error404/>,
    children: [
      {path: '/',  element: <Home/>},
      {path: '/aparelhos',  element:  <Aparelhos/>},
      {path: '/vizualizar/produtos/:id',  element: <VizualizarProduto/>},
    ]}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
