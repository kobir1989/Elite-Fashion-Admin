import React, { useContext, useEffect } from 'react';
import { useHttpHook } from './hooks/useHttpHook';
import PageRoutes from './routes';
import {
  getAllCategoryData,
  getAllProductData,
  updateState,
} from './store/Action';
import { Context } from './store/Context';

const App = () => {
  const { state, dispatch } = useContext(Context);
  const { isUpdated } = state;

  //Fetch Category on app start and send it store.
  const getCategoryData = (data) => {
    dispatch(getAllCategoryData(data?.allCategories));
  };
  //Fetch products on app start and send it store.
  const getProductData = (data) => {
    dispatch(getAllProductData(data?.products));
  };

  //callin API using custom hook.
  const { sendRequest } = useHttpHook();
  useEffect(() => {
    sendRequest({ url: '/products/all' }, getProductData);
    sendRequest({ url: '/categories/all' }, getCategoryData);
    return () => {
      dispatch(updateState(false)); // when isUpdated is true this useEffect will run again and will call the api again to update UI.
    };
    // eslint-disable-next-line
  }, [isUpdated, dispatch, sendRequest]);
  return <PageRoutes />;
};

export default App;
