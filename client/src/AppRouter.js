import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter;