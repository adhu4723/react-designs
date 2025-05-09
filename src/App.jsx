import { useState } from 'react'

import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import ProductDetails from './pages/ProductDetails'
import ScrollToTop from './components/ScrollToTop'
import Layout from './layout/Layout'
import NotFound from './pages/NotFound'
import Checkout from './pages/Checkout'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import ThankYouPage from './pages/ThankYouPage'
import OrderConfirmedPage from './pages/ThankYouPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <ScrollToTop/>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/product/:id' element={<ProductDetails />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
        <Route element={<ProtectedRoute/>}>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/thankyou' element={<OrderConfirmedPage />}></Route>
        </Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>

        </Route>
      </Routes>
      
      
    </>
  )
}

export default App
