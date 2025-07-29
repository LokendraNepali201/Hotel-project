import React from 'react'
import Header from './Header'
import Footer from './Features/Footer'
import { Outlet } from 'react-router-dom'
const RoutLayout = () => {
  return (
    <div>
        <Header/>
      <Outlet/>
      
      <Footer/>
    </div>
  )
}

export default RoutLayout
