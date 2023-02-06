import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductsListPage from "./pages/Product/ProductsListPage";
import CreateProductPage from "./pages/Product/CrateProductPage";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import { useHttpHook } from "./hooks/useHttpHook";
import { Context } from "./store/Context";
import { getAllProductData, getAllCategoryData } from "./store/Action";
import ProductEditPage from "./pages/Product/ProductEditPage";
import CategoryListPage from "./pages/category/CategoryListPage";
import CreateCategoryPage from "./pages/category/CreateCategoryPage";
import EditCategoryPage from "./pages/category/EditCategoryPage";
import SubCategoryListPage from "./pages/subCategory/SubCategoryListPage";
import AddSubCategoryPage from "./pages/subCategory/AddSubCategoryPage";

const App = () => {
  const { dispatch } = useContext(Context);
  const getCategoryData = (data) => {
    dispatch(getAllCategoryData(data?.allCategories))
  }
  const getProductData = (data) => {
    dispatch(getAllProductData(data?.products))
  }
  const { sendRequest } = useHttpHook();
  useEffect(() => {
    sendRequest({ url: "/products/all" }, getProductData);
    sendRequest({ url: "/categories/all" }, getCategoryData)
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
        <Route path="/category/create-new" element={<CreateCategoryPage />} />
        <Route path="/category/edit/:id" element={<EditCategoryPage />} />
        <Route path="/sub-category/list" element={<SubCategoryListPage />} />
        <Route
          path="/sub-category/create-new"
          element={<AddSubCategoryPage />}
        />
      </Route>
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default App;
