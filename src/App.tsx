import React from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {AuthPage} from "./pages/AuthPage";
import {UserPage} from "./pages/UserPage";
import {AdminPage} from "./pages/AdminPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthPage/>,
    },
    {
        path: "/user",
        element: <UserPage/>,
    },
    {
        path: "/admin",
        element: <AdminPage/>,
    }
]);


function App() {
  return ( <RouterProvider router={router}/>);
}

export default App;
