import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/Features/About';
import Fullaboutus from './Components/Features/Fullaboutus'
import Footer from './Components/Features/Footer';
import RoutLayout from './Components/RoutLayout';
import Home from './Components/Features/Home';
import Contact from './Components/Features/Contact'; 
import Nepalifood from './Components/Features/Nepalifood';
import Indianfood from './Components/Features/Indianfood';
import Chinesefood from './Components/Features/Chinesefood';
import Rooms from './Components/Features/Rooms';
import Signup from './auth/Signup';
import Login from './auth/Login';
import ProtectedRoute from './Components/Features/Dashboard/productedRoute';
import First from './Components/Features/Dashboard/First';
import AddProduct from './Components/Features/Dashboard/Addproduct';
import Upcomingservice from './Components/Upcomingservice';
import ProductEditForm from './Components/Features/Product/ProductEditForm';


const route = createBrowserRouter([
  {
    path: '/',                                
    element: <RoutLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      {path: 'fullaboutus', element: <Fullaboutus/>}, 
      { path: 'foods/nepali', element: <Nepalifood /> },
      { path: 'foods/indian', element: <Indianfood /> }, 
      { path: 'foods/chinese', element: <Chinesefood /> },
      { path: 'rooms', element: <Rooms/> },
      {path:'products',element:<Upcomingservice/>},
      
    ]
  },
  {path: 'signup', element: <Signup/>},
  {path : 'login', element:<Login/>},
      {path: 'addproduct', element:<AddProduct/>},
{path:'update/:id',element:<ProductEditForm/>},

  {
   path: '/dashboard',
   element: <First/>
  }
]);


const App = () => {
  return <RouterProvider router={route} />;
};

export default App;



