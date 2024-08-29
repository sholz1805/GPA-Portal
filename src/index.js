import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import ROUTES from './router/routes'
import './input.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    ...ROUTES
])
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <RouterProvider router={router}>
        </RouterProvider>
    {/*<App />*/}
    </ThemeProvider>
  </React.StrictMode>
);

