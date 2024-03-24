import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/barlow-condensed';
import '@fontsource/bellefair';
import '@fontsource/barlow';
import HomePage from '/src/routes/HomePage.jsx'
import Crew from '/src/routes/Crew.jsx'
import Destination from '/src/routes/Destination.jsx'
import Technology from '/src/routes/Technology.jsx'
import ErrorPage from './routes/Errorpage';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/destination",
    element: <Destination />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/crew",
    element: <Crew />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/technology",
    element: <Technology />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
