import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/Auth/LoginPage/LoginPage";
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
import EditSubCategoryPage from "./pages/subCategory/EditSubCategoryPage";
import OrderListPage from "./pages/Order/OrderListPage";
import OrderDetailsPage from "./pages/Order/OrderDetailsPage";
import UserListPage from "./pages/UserList/UserListPage";
import SingleProductPage from "./pages/Product/SingleProductPage";
import ForgetPassword from "./pages/Auth/ForgetPassword/ForgetPassword";
import AdminProfile from "./pages/AdminProfile/AdminProfile";
import UpdateAdminProfile from "./pages/AdminProfile/UpdateAdminProfile";
import { updateState } from "./store/Action";
import Earnings from "./pages/Earnings/Earnings";
import ReviewsListPage from "./pages/Reviews/ReviewListPage/ReviewsListPage";
import ReviewDetailsPage from "./pages/Reviews/ReviewDetailsPage/ReviewDetailsPage";
const App = () => {
  const { state, dispatch } = useContext(Context);
  const { isUpdated } = state;
  const getCategoryData = (data) => {
    dispatch(getAllCategoryData(data?.allCategories))
  }
  const getProductData = (data) => {
    dispatch(getAllProductData(data?.products))
  }
  const { sendRequest } = useHttpHook();
  useEffect(() => {
    sendRequest({ url: "/products/all" }, getProductData);
    sendRequest({ url: "/categories/all" }, getCategoryData);
    return () => {
      dispatch(updateState(false))
    }
  }, [isUpdated, dispatch])
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/list" element={<ProductsListPage />} />
        <Route path="/product/create-new" element={<CreateProductPage />} />
        <Route path="/product/edit/:id" element={<ProductEditPage />} />
        <Route path="/product/single/:id" element={<SingleProductPage />} />
        <Route path="/category/list" element={<CategoryListPage />} />
        <Route path="/category/create-new" element={<CreateCategoryPage />} />
        <Route path="/category/edit/:id" element={<EditCategoryPage />} />
        <Route path="/sub-category/list" element={<SubCategoryListPage />} />
        <Route
          path="/sub-category/create-new"
          element={<AddSubCategoryPage />}
        />
        <Route path="/sub-category/edit/:id" element={<EditSubCategoryPage />} />
        <Route path="/order/list" element={<OrderListPage />} />
        <Route path="/order-details/:id" element={<OrderDetailsPage />} />
        <Route path="/user/list" element={<UserListPage />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/profile/update" element={<UpdateAdminProfile />} />
        <Route path="/analytics/earning" element={<Earnings />} />
        <Route path="/reviews/list" element={<ReviewsListPage />} />
        <Route path="/review/details/:reviewId" element={<ReviewDetailsPage />} />
      </Route>
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default App;
