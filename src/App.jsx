// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './screens/Home'
// import letseat from "./photos/lets-eat.svg"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './screens/Login'
import Signup from "./screens/Signup";
// import Navbar from './components/Navbar'
import { CartProvider } from './components/context'
import MyOrder from './screens/MyOrder'


function App() {
  
  const router= createBrowserRouter([
    {
      path:"/",
      element:<><Home/></>
    },
    {
      path:"/login",
      element:<><Login/></>
    },
    {
      path:"/createuser",
      element:<><Signup/></>
    },
    {
      path:"/myOrder",
      element:<><MyOrder/></>
    }
    
  ]);

  return (
    <>
    <CartProvider>
     <RouterProvider router={router}/>
     </CartProvider>
    </>
  )
}

export default App
