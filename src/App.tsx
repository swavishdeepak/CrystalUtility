import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter, useRouteError } from "react-router-dom";
import { Box } from '@mui/material'
import { MainLayout } from './layout/MainLayout';
import { Dashboard } from './Page/Dashboard/Dashboard';
import AllUser from './Page/AllUser/AllUser';
import Contract from './Page/Contracts/Contract';
import AllMerchant from './Page/Merchants/AllMerchant';
import AllCommission from './Page/Commission/AllCommission';

function App() {
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/allUser",
          element: <AllUser />,
        },
        {
          path: "/contract",
          element: <Contract />,
        },
        {
          path: "/merchant",
          element: <AllMerchant />,
        },
        {
          path: "/commission",
          element: <AllCommission />,
        },
       
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h1>An error occurred</h1>
      <p>Sorry, something went wrong.</p>
    </Box>
  );
}
export default App;
