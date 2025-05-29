import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import '@ant-design/v5-patch-for-react-19';
import { RouterProvider } from 'react-router-dom';
import router from './router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

