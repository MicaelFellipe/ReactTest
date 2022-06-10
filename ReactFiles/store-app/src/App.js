import React, { Component } from 'react';
import {AppContainer} from './style';
import CategoriePage from './pages/CategoriePage/CategoriePage';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage/ProductPage';
import Cart from './pages/Cart/Cart';

class App extends Component {
  render() {
    return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<CategoriePage />} />
        <Route path="/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AppContainer>
  );
  }
}

export default App;
