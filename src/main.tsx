import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Pages/HomePage.tsx';
import {createHashRouter, RouterProvider} from "react-router-dom";
import AboutPage from "./Pages/AboutPage.tsx";
import './css/main.css'
import NotFoundPage from "./Pages/NotFoundPage.tsx";
import SkillsPage from "./Pages/SkillsPage.tsx";
import ContactPage from "./Pages/ContactPage.tsx";


//Defines what components get rendered at each specific path
const router = createHashRouter([
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
        element: <SkillsPage/>
    },
    {
        path: '/contact',
        element: <ContactPage/>
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
