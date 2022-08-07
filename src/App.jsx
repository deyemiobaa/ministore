import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import Cart from './pages/cart/cart';
import Product from './pages/product/product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path=":category" element={<Main />} />
        </Route>
        <Route path="/product/details/:product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
