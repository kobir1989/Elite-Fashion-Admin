import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductsListPage from "./pages/Product/ProductsListPage";
import CreateProductPage from "./pages/Product/CrateProductPage";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import { useHttpHook } from "./hooks/useHttpHook";
import { Context } from "./store/Context";
import { getAllProductData } from "./store/Action";

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
      <Route path="/" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="product/list" element={<ProductsListPage />} />
        <Route path="product/create-new" element={<CreateProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
