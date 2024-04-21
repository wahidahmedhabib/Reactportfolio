import React from 'react'

import './footer.css'
import '../Navbar/navbar.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className='footer'>
        <h3>Wahid Ahmed</h3>
        <div className='menu footerLink' >
          <ul>
            <NavLink to='/home' className='n_li f_li' >Home</NavLink>
            <NavLink
              className='n_li f_li'
              to='/about'
            >About</NavLink>
            <NavLink to='/contact' className="n_li f_li">Contact</NavLink>
            <NavLink to='/projects' className="n_li f_li">Projects</NavLink>
          </ul>
        </div>
        <div className='footer_copyRight'>
        © 2024 All rights reserved by Wahid Ahmed
        </div>
      </footer>
    </>
  )
}

export default Footer