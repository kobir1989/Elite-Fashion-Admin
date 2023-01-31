import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ContextProvider from './store/ContextProvider';
import { Toaster } from "react-hot-toast"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Toaster position="top-right" toastOptions={{ duration: 3500, }} />
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);

