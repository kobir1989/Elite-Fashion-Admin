import React, { useReducer } from "react";
import { initialState } from "./State";
import reducer from "./Reducer";
import { Context } from "./Context";

const ContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const value = { state, dispatch };
   return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
