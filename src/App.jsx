import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Home from './Pages/Home'
import ErrorPage from './Components/ErrorPage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Webdesign from './Pages/Webdesign'
import LogoDesign from './Pages/LogoDesign'
import Web from './Pages/Web'
import CMS from './Pages/CMS'
import Ecommerce from './Pages/Ecommerce'
import MobileDev from './Pages/MobileDev'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        }
        ,
        {
          path:"/services",
          element:<Services/>
        }
        ,
        {
          path:"/services/web-design",
          element:<Webdesign/>
        }
        ,
        {
          path:"/services/logo-design-services",
          element:<LogoDesign/>
        }
        ,
        {
          path:"/services/web-development",
          element:<Web/>
        }
        ,
        {
          path:"/services/content-management-system",
          element:<CMS/>
        }
        ,
        {
          path:"/services/ecommerce-development",
          element:<Ecommerce/>
        }
        ,
        {
          path:"/services/mobile-application-development",
          element:<MobileDev/>
        }
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App