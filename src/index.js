import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import 'normalize.css'

import '@ant-design/v5-patch-for-react-19';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
    <RouterProvider router={router}>
  
    </RouterProvider>
    </Provider>
 
);

