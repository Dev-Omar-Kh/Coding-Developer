import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SiteLayout from './Layouts/Site-Layout/SiteLayout';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';

const routes = createBrowserRouter([

    {path: '/' , element : <SiteLayout /> , children: [

        {path: '/' , element: <Home />},

    ]},

    {path: '*' , element: <Error />}

]);

export default function App() {

    return <React.Fragment>

        <RouterProvider router={routes} />

    </React.Fragment>

}
