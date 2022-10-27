import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from '../../Pages/Category/Category/Category';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import Register from '../../Pages/Login/Register/Register';
import News from '../../Pages/News/News/News';
import Profile from '../../Pages/Others/Profile/Profile';
import TermsAndCondition from '../../Pages/Others/TermsAndCondition/TermsAndCondition';
import PrivetRoute from '../PrivetRoute/PrivetRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://dragon-news-server-azure-one.vercel.app/news`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-server-azure-one.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivetRoute><News></News></PrivetRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-azure-one.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivetRoute><Profile></Profile></PrivetRoute>
            }
        ]
    }
])