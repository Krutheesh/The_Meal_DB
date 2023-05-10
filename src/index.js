import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Recipeinfo from './components/Recipeinfo';
const appRouter = createBrowserRouter(
   [
      {
         path:"/",element:<App/>
      },
      {
         path:'/:idMeal',
         element:<Recipeinfo/>
      }
   ]
   );
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
    <>
    <RouterProvider router = {appRouter} />
    </>

);

