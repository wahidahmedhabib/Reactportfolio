import React from 'react'
import HeroSec from './HeroSec/HeroSec'
import NavBar from './Navbar/NavBar'
import About from './Page2/About'
import MainBtn from './MainBtn/MainBtn'
import Contact from './contact/Contact'
import Projects from './Projects/Projects'

function Home() {
    return (
        <div>
            {/* <NavBar /> */}
            <HeroSec />
            <MainBtn />
            <About />
            <Projects/>
            <Contact />
        </div>
    )
}

export default Home