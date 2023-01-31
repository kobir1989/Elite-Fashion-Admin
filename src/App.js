import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductsListPage from "./pages/Product/ProductsListPage";
import CreateProductPage from "./pages/Product/CrateProductPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="product/list" element={<ProductsListPage />} />
      <Route path="product/create-new" element={<CreateProductPage />} />
    </Routes>
  );
}

export default App;
