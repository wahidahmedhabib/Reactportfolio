import React from 'react'

import proImg1 from '../../images/1.jpg'
import proImg2 from '../../images/2.jpg'
import proImg3 from '../../images/4.jpg'
import proImg4 from '../../images/3.jpg'


import './project.css'

function Projects() {
  return (
    <>
      <div className='projects'>

    

        <div className="pro_card">
          <div className="pro_card_img">
            <img src={proImg3} alt="" />
          </div>
          <div className="pro_card_about ">
            <h2> D-Studio</h2>
            <p>They are was greater open above shelter lets itsel</p>
          </div>
        </div>

        <div className="pro_card ">
          <div className="pro_card_img">
            <img src={proImg1} alt="" />
          </div>
          <div className="pro_card_about ">
            <h2> D-Studio</h2>
            <p>They are was greater open above shelter lets itsel</p>
          </div>
        </div>
        <div className="pro_card">
          <div className="pro_card_img">
            <img src={proImg2} alt="" />
          </div>
          <div className="pro_card_about ">
            <h2> D-Studio</h2>
            <p>They are was greater open above shelter lets itsel</p>
          </div>
        </div>
        <div className="pro_card">
          <div className="pro_card_img">
            <img src={proImg3} alt="" />
          </div>
          <div className="pro_card_about ">
            <h2> D-Studio</h2>
            <p>They are was greater open above shelter lets itsel</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Projects