import React from 'react'
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
// import Navbar from './Components/Navbar'
// import Homepage from './Components/Homepage';
import Blog from './Components/Blog';
import About from './Components/About'
import Contact from './Components/Contact';
import AdminPage from './Components/AdminPage';
// import Quickpage from './Components/Quickpage';
// import './ComponentsCss/import';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductPage from './Components/ProductPage';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Homepage/></>
    },
    {
      path: "/Blog",
      element: <><Navbar/><Blog/></>
    },
    {
      path: "/Contact",
      element: <><Navbar/><Contact/></>
    },
    {
      path: "/About",
      element: <><Navbar/><About/></>
    },
    {
      path: "/Product",
      element: <><Navbar/><ProductPage /></>,
    },    
    {
      path: "/Footer",
      element: <><Navbar/><Footer/></>
    },
    {
      path: "/Login",
      element: <><Navbar/><Login/></>
    },
    {
      path: "/Signup",
      element: <><Navbar/><Signup/></>
    },
    {
      path: "/AdminPage",
      element: <><Navbar/><AdminPage/></>
    },
    // {
    //   path: "/subProduct",
    //   element: <><Navbar/><Quickpage/></>
    // }
    ]);
  

  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
