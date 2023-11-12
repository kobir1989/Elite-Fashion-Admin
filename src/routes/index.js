import LinearProgress from '@mui/material/LinearProgress';
import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from '../components/ProtectedRoutes/ProtectedRoutes';
const AdminProfile = lazy(() => import('../pages/AdminProfile/AdminProfile'));
const UpdateAdminProfile = lazy(() =>
  import('../pages/AdminProfile/UpdateAdminProfile')
);
const ForgetPassword = lazy(() =>
  import('../pages/Auth/ForgetPassword/ForgetPassword')
);
const LoginPage = lazy(() => import('../pages/Auth/LoginPage/LoginPage'));
const ChatDetailsPage = lazy(() => import('../pages/Chat/ChatDetailsPage'));
const ChatPage = lazy(() => import('../pages/Chat/ChatPage'));
const Earnings = lazy(() => import('../pages/Earnings/Earnings'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const OrderDetailsPage = lazy(() => import('../pages/Order/OrderDetailsPage'));
const OrderListPage = lazy(() => import('../pages/Order/OrderListPage'));
const CrateProductPage = lazy(() =>
  import('../pages/Product/CrateProductPage')
);
const ProductEditPage = lazy(() => import('../pages/Product/ProductEditPage'));
const ProductsListPage = lazy(() =>
  import('../pages/Product/ProductsListPage')
);
const SingleProductPage = lazy(() =>
  import('../pages/Product/SingleProductPage')
);
const ReviewDetailsPage = lazy(() =>
  import('../pages/Reviews/ReviewDetailsPage/ReviewDetailsPage')
);
const ReviewsListPage = lazy(() =>
  import('../pages/Reviews/ReviewListPage/ReviewsListPage')
);
const UserListPage = lazy(() => import('../pages/UserList/UserListPage'));
const CategoryListPage = lazy(() =>
  import('../pages/category/CategoryListPage')
);
const CreateCategoryPage = lazy(() =>
  import('../pages/category/CreateCategoryPage')
);
const EditCategoryPage = lazy(() =>
  import('../pages/category/EditCategoryPage')
);
const AddSubCategoryPage = lazy(() =>
  import('../pages/subCategory/AddSubCategoryPage')
);
const EditSubCategoryPage = lazy(() =>
  import('../pages/subCategory/EditSubCategoryPage')
);
const SubCategoryListPage = lazy(() =>
  import('../pages/subCategory/SubCategoryListPage')
);

const PageRoutes = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
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
          <Route
            path='/admin/profile/update'
            element={<UpdateAdminProfile />}
          />
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
    </Suspense>
  );
};

export default PageRoutes;
