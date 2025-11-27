import React from 'react'
import Header from '../Components/Header'
import Home from '../Pages/Home'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const AppLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout