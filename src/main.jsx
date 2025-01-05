import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import Home from './components/Home';
import DonationCampaigns from './components/DonationCampaigns';
import HowToHelp from './components/HowToHelp';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './providers/AuthProvider';
import DonationDetails from './components/DonationDetail';
import Error from './components/error';
import ForgetPassword from './components/ForgetPassword';
import PrivateRoute from './route/PrivateRoute';
import UpdateProfile from './components/updateProfile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/DonationCampaigns',
        element: <DonationCampaigns></DonationCampaigns>,
      },
      {
        path: '/HowToHelp',
        element: <HowToHelp></HowToHelp>,
      },
      {
        path: '/Dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
      {
        path: '/Login',
        element: <Login></Login>,
      },
      {
        path: '/Register',
        element: <Register></Register>,
      },
      {
        path: '/DonationDetail/:id',
        element: <PrivateRoute><DonationDetails></DonationDetails>,</PrivateRoute>
      },
      {
        path: '/ForgetPassword',
        element: <ForgetPassword></ForgetPassword>, 
      },
      {
        path: '/UpdateProfile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
