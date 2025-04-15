import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import UserProtected from "./UserProtected";
import User from "../pages/User/User";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <UserProtected />,
        children: [
          {
            path: "/user",
            element: <User />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const AppRouter = () => {
  return <RouterProvider router={Router} />;
};

export default AppRouter;
