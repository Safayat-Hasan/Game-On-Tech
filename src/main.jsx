import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './main_components/Root/Root';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Register from './pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/services.json')
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/services/:id',
        element: <ServiceDetail></ServiceDetail>,
        loader: () => fetch('/services.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
