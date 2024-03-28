import React from 'react'
import {Route, Routes} from "react-router-dom";

import { Navbar, Footer } from "src/components/";
import {Home, About, Contact, Order} from "src/pages/";

import ShopContextProvider from "src/context/ShopContext.jsx";
const App = () => {
  return (
    <>
      <ShopContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/order" element={<Order/>}/>
      </Routes>
      <Footer/>
      </ShopContextProvider>
    </>
  )
}

export default App
