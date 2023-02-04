import { useCallback, useContext, useState } from 'react';
import { axiosInstance } from "../utils/axios";
import { Context } from "../store/Context";
import { logout, setIsLoading, setError } from "../store/Action";

// const BASE_URL = process.env.REACT_APP_BASE_URL;
export const useHttpHook = () => {
   const { state, dispatch } = useContext(Context)
   const [hasError, setHasError] = useState(null)
   const [loading, setLoading] = useState(false)
   const { authToken } = state
   const sendRequest = useCallback(async (reqConfig, getResponseData) => {
      dispatch(setIsLoading(true))
      setLoading(true)
      try {
         const response = await axiosInstance({
            method: reqConfig.method ? reqConfig.method : "get",
            url: reqConfig.url,
            data: reqConfig.postData ? reqConfig.postData : {},
            headers: {
               'Content-Type': "application/json multipart/form-data",
               Authorization: `Bearer ${authToken?.token}`
            }
         });
         // console.log(response.data, "FROM USEHTTP HOOK")
         getResponseData(response?.data);
         dispatch(setIsLoading(false))

      } catch (err) {
         setError(err?.response?.data || err?.message);
         setHasError(err?.response?.data || err?.message)
         if (err.response.status === 401 || err.response.status === 403) {
            dispatch(logout())
         }
         console.log(err?.response?.data || err?.message, "ERROR FROM USEHTTP HOOK");
         setIsLoading(false);
         setLoading(false)
      }
   }, [authToken, dispatch]);

   return {
      sendRequest, loading, hasError
   }

}