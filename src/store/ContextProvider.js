import React, { useEffect, useReducer, useState } from "react";
import { initialState } from "./State";
import reducer from "./Reducer";
import { Context } from "./Context";

const ContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const { authToken } = state
   console.log(authToken)

   useEffect(() => {
      localStorage.setItem("admin", JSON.stringify(authToken))
      // console.log("USE_EFFECT_RUNS")
   }, [authToken]);

   const value = { state, dispatch };
   return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
