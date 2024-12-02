import React from 'react'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Product from './pages/Product'
import Testimonial from './pages/Testimonial'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/AboutUs';
import Layout from './components/Layout/Layout'
import Checkout from './pages/Checkout'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='/'element={<Layout/>}>
              <Route path='/' element= {<Home />} />
              <Route path='/about' element= {<About />} />
              <Route path='/product' element= {<Product />} />
              <Route path='/testimonial' element= {<Testimonial />} />
              <Route path='/blog' element= {<Blog />} />
              <Route path='/contact' element= {<Contact />} />
              <Route path='/checkout' element= {<Checkout />} />
              <Route path='/cart' element= {<Cart />} />
              
            </Route>
          </Routes>
        </CartProvider>
     </BrowserRouter>

    </>
  )
}

export default App
