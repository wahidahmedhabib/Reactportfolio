import React from 'react'
// import NavBar from './src/component/Navbar/NavBar'
import { Outlet } from 'react-router-dom'
// import App from './src/App'
// import Footer from './src/component/footer/Footer'
import NavBar from './component/Navbar/NavBar'
// import Footer
import Footer from './component/footer/Footer'


function LayOut() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
            {/* <App/> */}
        </div>
    )
}

export default LayOut