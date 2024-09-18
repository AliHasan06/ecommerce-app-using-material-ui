import React from 'react' 
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './components/Navbar.jsx'
function Layout() {
  return (

    <>
<ResponsiveAppBar />
    <Outlet/>
    
    {/* <div>Layout</div> */}
    
    </>
  )
}

export default Layout