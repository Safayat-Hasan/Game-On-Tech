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
import ServiceDetail from './private_components/ServiceDetail/ServiceDetail';
import Register from './pages/Register/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './private_components/PrivateRoute/PrivateRoute';
import Blogs from './private_components/Blogs/Blogs';
import Profile from './private_components/Profile/Profile';
import ErrorPage from './main_components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
        loader: () => fetch('/services.json')
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blogs',
        element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
