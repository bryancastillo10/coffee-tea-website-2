import React from "react";
import { Router, Route, Routes } from "react-router-dom";

import { Navbar, Footer } from "src/components/";
import { Home, About, News, Order, CheckOut } from "src/pages/";

import ShopContextProvider from "src/components/context/ShopContext.jsx";

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/order" element={<Order />} />
          <Route path="/check-out" element={<CheckOut />} />
        </Routes>
        <Footer />
      </ShopContextProvider>
    </>
  );
};

export default App;
