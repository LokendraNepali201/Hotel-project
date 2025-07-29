import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/Features/About';
import Footer from './Components/Features/Footer';
import RoutLayout from './Components/RoutLayout';
import Menu from './Components/Features/Menu';
import Home from './Components/Features/Home';
import Contact from './Components/Features/Contact'; 
import Nepalifood from './Components/Features/Nepalifood';
import Indianfood from './Components/Features/Indianfood';
import Chinesefood from './Components/Features/Chinesefood';
import Rooms from './Components/Features/Rooms';

const route = createBrowserRouter([
  {
    path: '/',                                
    element: <RoutLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> }, 
      { path: 'foods/nepali', element: <Nepalifood /> },
      { path: 'foods/indian', element: <Indianfood /> },
      { path: 'foods/chinese', element: <Chinesefood /> },
      { path: 'rooms', element: <Rooms/> },
    ]
  }
]);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
