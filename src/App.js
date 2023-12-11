import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import OutStore from './pages/OutStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
function App() {
  return (
    <>
        <BrowserRouter>
           <Routes>
              <Route path='/' element={<Layout></Layout>}>
                <Route index element={<Home></Home>}></Route>
                <Route path='about' element={<About></About>}></Route>
                <Route path='contact' element={<Contact></Contact>}></Route>
                <Route path='product' element={<OutStore></OutStore>}></Route>
                <Route path='cart' element={<Cart></Cart>}></Route>
                <Route path='checkout' element={<Checkout></Checkout>}></Route>
                <Route path='blog' element={<Blog></Blog>}></Route>
                <Route path='compare-product' element={<CompareProduct></CompareProduct>}></Route>
                <Route path='wish-list-product' element={<Wishlist></Wishlist>}></Route>
                <Route path='login' element={<Login></Login>}></Route>
                <Route path='forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
                <Route path='signup' element={<Signup></Signup>}></Route>
                <Route path='resetpassword' element={<Resetpassword></Resetpassword>}></Route>
                <Route path='product/:id' element={<SingleProduct></SingleProduct>}></Route>
              </Route>
            </Routes>         
        </BrowserRouter>
    </>
  )
}

export default App;
