import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from '../components/ProtectedRoutes/ProtectedRoutes';
import AdminProfile from '../pages/AdminProfile/AdminProfile';
import UpdateAdminProfile from '../pages/AdminProfile/UpdateAdminProfile';
import ForgetPassword from '../pages/Auth/ForgetPassword/ForgetPassword';
import LoginPage from '../pages/Auth/LoginPage/LoginPage';
import ChatDetailsPage from '../pages/Chat/ChatDetailsPage';
import ChatPage from '../pages/Chat/ChatPage';
import Earnings from '../pages/Earnings/Earnings';
import HomePage from '../pages/HomePage/HomePage';
import OrderDetailsPage from '../pages/Order/OrderDetailsPage';
import OrderListPage from '../pages/Order/OrderListPage';
import CrateProductPage from '../pages/Product/CrateProductPage';
import ProductEditPage from '../pages/Product/ProductEditPage';
import ProductsListPage from '../pages/Product/ProductsListPage';
import SingleProductPage from '../pages/Product/SingleProductPage';
import ReviewDetailsPage from '../pages/Reviews/ReviewDetailsPage/ReviewDetailsPage';
import ReviewsListPage from '../pages/Reviews/ReviewListPage/ReviewsListPage';
import UserListPage from '../pages/UserList/UserListPage';
import CategoryListPage from '../pages/category/CategoryListPage';
import CreateCategoryPage from '../pages/category/CreateCategoryPage';
import EditCategoryPage from '../pages/category/EditCategoryPage';
import AddSubCategoryPage from '../pages/subCategory/AddSubCategoryPage';
import EditSubCategoryPage from '../pages/subCategory/EditSubCategoryPage';
import SubCategoryListPage from '../pages/subCategory/SubCategoryListPage';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/list' element={<ProductsListPage />} />
        <Route path='/product/create-new' element={<CrateProductPage />} />
        <Route path='/product/edit/:id' element={<ProductEditPage />} />
        <Route path='/product/single/:id' element={<SingleProductPage />} />
        <Route path='/category/list' element={<CategoryListPage />} />
        <Route path='/category/create-new' element={<CreateCategoryPage />} />
        <Route path='/category/edit/:id' element={<EditCategoryPage />} />
        <Route path='/sub-category/list' element={<SubCategoryListPage />} />
        <Route
          path='/sub-category/create-new'
          element={<AddSubCategoryPage />}
        />
        <Route
          path='/sub-category/edit/:id'
          element={<EditSubCategoryPage />}
        />
        <Route path='/order/list' element={<OrderListPage />} />
        <Route path='/order-details/:id' element={<OrderDetailsPage />} />
        <Route path='/user/list' element={<UserListPage />} />
        <Route path='/admin/profile' element={<AdminProfile />} />
        <Route path='/admin/profile/update' element={<UpdateAdminProfile />} />
        <Route path='/analytics/earning' element={<Earnings />} />
        <Route path='/reviews/list' element={<ReviewsListPage />} />
        <Route
          path='/review/details/:reviewId'
          element={<ReviewDetailsPage />}
        />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/chat/details/:roomId' element={<ChatDetailsPage />} />
      </Route>
      <Route path='/forget-password' element={<ForgetPassword />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default PageRoutes;
