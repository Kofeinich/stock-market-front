import React from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {UserPage} from "./pages/UserPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <UserPage/>,
    },
]);


function App() {
  return ( <RouterProvider router={router}/>);
}

export default App;
