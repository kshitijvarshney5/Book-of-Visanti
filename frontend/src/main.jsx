import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homepage/HomePage.jsx";
import DashBoard from "./routes/Dashboard/DashBoard.jsx";
import ChatPage from "./routes/ChatPage/ChatPage.jsx";
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";
import DashBoardLayout from "./layouts/dashBoardLayout/DashBoardLayout.jsx";
import SignInPage from "./routes/Signin/SignInPage.jsx";
import SignUpPage from "./routes/SignUp/SignUpPage.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signin/*",
        element: <SignInPage />,
      },
      {
        path: "/signup/*",
        element: <SignUpPage />,
      },
      {
        element: <DashBoardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashBoard />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
