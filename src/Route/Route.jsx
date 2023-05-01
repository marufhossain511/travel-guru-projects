import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import React from 'react';
import Details from "../Pages/Details/Details";
import Hotels from "../Pages/Hotels/Hotels";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
const router =createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/info')
            },
            {
              path:'/info/:id',
              element:<Details></Details>,
              loader:({params})=>fetch(`http://localhost:5000/info/${params.id}`)
            }
            // {
            //   path:'/hotels/:id',
            //   element:<Hotels></Hotels>,
            //   loader:({params})=>fetch(`http://localhost:5000/hotels/${params.id}`)
            // }
        ]
      },
      {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
          {
            path:'/hotels/:id',
            element:<Hotels></Hotels>,
            loader:({params})=>fetch(`http://localhost:5000/hotels/${params.id}`)
          },
          {
            path:'/login',
            element:<Login></Login>
          }
        ]
      }
])

export default router