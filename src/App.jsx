import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HEADPHONES from './pages/HEADPHONES'
import SPEAKERS from './pages/SPEAKERS'
import EARPHONSE from './pages/EARPHONES'


// pages
import Home from './pages/Home'
import Datail from './pages/Datail'
import Product from './pages/Product'
import Product1 from './pages/Product1'
import Product2 from './pages/Product2'
import Product3 from './pages/Product3'
import Product4 from './pages/Product4'
import Forma from './pages/Forma'
import NotFound from './pages/NotFound'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/headphones' element={<HEADPHONES />} />
        <Route path='/speakers' element={<SPEAKERS />} />
        <Route path='/earphones' element={<EARPHONSE />} />
        <Route path='/datali' element={<Datail />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product1' element={<Product1 />} />
        <Route path='/product2' element={<Product2 />} />
        <Route path='/product3' element={<Product3 />} />
        <Route path='/product4' element={<Product4 />} />
        <Route path='/forma' element={<Forma />} />
        
        <Route path='*'element={<NotFound />} /> 
      </Route>
    )
  )



  return (
    <RouterProvider router={router} />
  )
}

export default App