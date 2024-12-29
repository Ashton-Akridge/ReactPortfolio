import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Pages/HomePage.tsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutPage from "./Pages/AboutPage.tsx";
import './css/main.css'
import NotFoundPage from "./Pages/NotFoundPage.tsx";

//Defines what components get rendered at each specific path
const router = createBrowserRouter([
    {
        path : '/',
        element: <HomePage/>,
    },
    {
        path: '/about',
        element: <AboutPage/>
    },
    {
        path: '/skills',
        element: <AboutPage/>
    },
    {
        path: '/contact',
        element: <AboutPage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
