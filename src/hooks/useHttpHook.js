import { useState, useCallback } from 'react';
import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

export const useHttpHook = () => {
   const [error, setError] = useState(null)
   const [isLoading, setIsLoading] = useState(null);

   const sendRequest = useCallback(async (reqConfig, getResponseData) => {
      setIsLoading(true);
      try {
         const response = await axios({
            method: reqConfig.method ? reqConfig.method : "get",
            // url: `${BASE_URL}/${reqConfig.url}`,
            url: reqConfig.url,
            data: reqConfig.postData ? reqConfig.postData : {},
         });
         console.log(response.data, "FROM USEHTTP HOOK")
         getResponseData(response.data);
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
   }

}