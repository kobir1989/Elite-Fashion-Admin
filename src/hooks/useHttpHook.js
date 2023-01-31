import { useState, useCallback, useContext } from 'react';
import { axiosInstance } from "../utils/axios";
import { Context } from "../store/Context";

// const BASE_URL = process.env.REACT_APP_BASE_URL;
export const useHttpHook = () => {
   const [error, setError] = useState(null)
   const [isLoading, setIsLoading] = useState(null);
   const { state } = useContext(Context)
   const sendRequest = useCallback(async (reqConfig, getResponseData) => {
      setIsLoading(true);
      try {
         const response = await axiosInstance({
            method: reqConfig.method ? reqConfig.method : "get",
            url: reqConfig.url,
            data: reqConfig.postData ? reqConfig.postData : {},
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${state.authToken.token}`

            }
         });
         console.log(response.data, "FROM USEHTTP HOOK")
         getResponseData(response?.data);
         setIsLoading(false);

      } catch (err) {
         setError(err?.response?.data);
         console.log(err?.response?.data, "ERROR FROM USEHTTP HOOK");
         setIsLoading(false);
      }
   }, []);

   return {
      isLoading,
      error,
      sendRequest,
      setError
   }

}