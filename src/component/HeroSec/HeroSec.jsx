import React from 'react'
import WAHIDPIC from '../../images/wahid.png'
import { Link } from 'react-router-dom'
import resume from './WahidDevCV.pdf'
// import {resume} from './WahidDevCV.pdf'
// import Link from 
import './heroSec.css'

function HeroSec() {
  return (
    <div>
      <div className="main">
        <div className="main_text1">
          <div className="main_text1_l1">I'm</div>
          <div className="main_text1_h1">WAHID AHMED</div>
          <div className="main_text1_para">
            A freelancer who porvide your website more efficently who porvide your
            website more efficently porvide your website more efficently
          </div>
        </div>
        <div className="pic">
          <img src={WAHIDPIC} alt="mainPic" />
          {/* <img src="images/hmzaaa.png" alt=""> */}
        </div>
        <div className="main_text2">
          <div className="main_text2_l1">services</div>
          <div className="main_text2_para">
            Let's build quality products in programming and who porvide your website
            more efficently design with my services
          </div>
          <div className="main_text2_btn">
            <button className='formBtn'>

              <a href={resume} download>  Downloade Resume </a>{" "}
            </button>
            {/* <Link to="../../WahidDevCV.pdf" download>  Downloade Resume </Link>{" "} */}
            {/* <span> */}
            {" "}
            {/* <i className="fa-sharp fa-solid fa-arrow-right" /> */}
            {/* </span> */}
          </div>
          <div className="main_text2_icons">
            <ul>
              <li>
                <i className="fa-brands fa-facebook-f" />
              </li>
              <li>
                <i className="fa-brands fa-twitter" />
              </li>
              <li>
                <i className="fa-brands fa-square-instagram" />
              </li>
              <li>
                <i className="fa-brands fa-pinterest-p" />
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroSec