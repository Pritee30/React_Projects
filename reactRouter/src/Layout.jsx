import React from 'react'
import Header from './assets/Components/Header/Header'
import Footer from './assets/Components/Footer/Foooter'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
      <Header/> 
      <Outlet/>  {/* header fotter will be same by using Outlet */}
      <Footer/>
   </>
  )
}

export default Layout
