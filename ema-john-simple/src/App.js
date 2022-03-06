import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/product/:productKey" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
