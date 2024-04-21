import React, { useState } from 'react'

// import { Link } from 'react-router-dom'
import { Link, NavLink } from "react-router-dom";

import './navbar.css'
import Home from '../Home';
function NavBar() {
    const [resp, setResp] = useState(false)

    const showDrawer = () => {
        console.log('btnnn.....')
        setResp(prev => prev = !prev)
        console.log(resp)
    }

    return (
        <div>
            <>
                {/* Hello world */}
                <div className="nav_bar">
                    <div className="logo">WAhid Ahmed</div>
                    <div className={`menu  ${resp ? 'resp' : ''} `} >
                        <ul>
                            <NavLink to='/home' className='n_li' onClick={() => setResp(false)} >Home</NavLink>
                            <NavLink
                                className='n_li'
                                onClick={() => setResp(false)}
                                to='/about'
                            >About</NavLink>
                            <NavLink to='/contact' onClick={() => setResp(false)} className="n_li">Contact</NavLink>
                            <NavLink to='/projects' onClick={() => setResp(false)} className="n_li">Projects</NavLink>
                        </ul>
                    </div>
                    <div className="nav_icon" onClick={showDrawer}>

                        {/* <a href="#"> */}
                        {" "}
                        <i className="fa-sharp fa-solid fa-bars-staggered" />{" "}
                        {/* </a> */}
                    </div>
                </div>
            </>

        </div>
    )
}

export default NavBar