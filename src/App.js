import React from 'react';
import "./styles/App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import Search from './components/Search';
import Nav from './components/Nav';
import Catogerious from './components/Catogerious';
import OrderStatusBarVertical from "./components/Order";
import Profile from "./components/Profile";
import Reviews from './components/Reviews';
import ContactUs from './components/Contact';
import FooterMenu from './components/FooterMenu';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='search' element={<Search />} />
        <Route path='catogerious' element={<Catogerious />} />
        <Route path='orderstatus' element={<OrderStatusBarVertical />} />
        <Route path='profile' element={<Profile />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='contact' element={<ContactUs />} />


        <Route path='profile/orderstatus' element={<OrderStatusBarVertical />} />
        <Route path='profile/contact' element={<ContactUs />} />
      </Routes>
      <FooterMenu />
    </BrowserRouter>
  )
}
