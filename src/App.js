import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductsListPage from "./pages/Product/ProductsListPage";
import CreateProductPage from "./pages/Product/CrateProductPage";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import { useHttpHook } from "./hooks/useHttpHook";
import { Context } from "./store/Context";
import { getAllProductData } from "./store/Action";
import ProductEditPage from "./pages/Product/ProductEditPage";
import CategoryListPage from "./pages/category/CategoryListPage";

const App = () => {
  const { dispatch } = useContext(Context);
  const getResponseData = (data) => {
    // console.log(data)
    dispatch(getAllProductData(data?.products))
  }
  const { sendRequest } = useHttpHook()
  useEffect(() => {
    sendRequest({ url: "/products/all" }, getResponseData)
  }, [])

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/list" element={<ProductsListPage />} />
        <Route path="/product/create-new" element={<CreateProductPage />} />
        <Route path="/product/edit/:id" element={<ProductEditPage />} />
        <Route path="/category/list" element={<CategoryListPage />} />
      </Route>
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default App;
