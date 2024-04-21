import React from 'react'
import CardPic from '../../images/p3.jpg'
import CardPic1 from '../../images/p4.jpg'
import CardPic2 from '../../images/p5.jpg'
import './about.css'
function About() {
  return (
    <div>
   
      <div className="page22">
        <div className="page2">
          <div className="page2_box1">
            <div className="box1_h1">What You Can Think <br />
              I Can Develop It <br />
              For You!</div>
            <div className="box1_p1">
              We create future-ready websites & web apps via innovative
              digital  solutions so that you can focus on your core business.
            </div>
            <div className="box1_div4">
              <div className="div1">
                <div className="div1_p1">
                  <div className="num">250+</div>
                  <div className="para">worked smart</div>
                </div>
                <div className="div1_p2">
                  <div className="num">200+</div>
                  <div className="para">designer fact</div>
                </div>
              </div>
              <div className="div2">
                <div className="div2_p1">
                  <div className="num">100+</div>
                  <div className="para">programmer smart</div>
                </div>
                <div className="div2_p2">
                  <div className="num">150+</div>
                  <div className="para">Developer smart</div>
                </div>
              </div>
            </div>
          </div>
          {/* <video width="600" height="100%" autoplay loop muted playsinline> */}
        {/* <source src="movie-h265.mov" type='video/mp4; codecs="hvc1"' /> */}
        {/* <source src="movie-webm.webm" type="video/webm" /> */}
      {/* </video> */}
          <div className="page2_cards">
            <div className="card1">
              <div className="card1_pic">
                <img src={CardPic} alt="" />
                {/* <img src={CardPic} alt=""> */}
              </div>
              <div className="card1_txt">
                <h2>UI/UX DESIGNER</h2>
                Lorem ipsum dolor sit amet.
              </div>
              <span className="card_icon">
                {" "}
                <i className="fa-sharp fa-solid fa-arrow-right" />{" "}
              </span>
            </div>
            <div className="card2 card1">
              <div className="card1_pic">
                <img src={CardPic2} alt="" />
                {/* <img src={CardPic} alt=""> */}
              </div>
              <div className="card2_txt">
                <h2>BRANDING DESIGNER</h2>
                Lorem ipsum dolor sit amet.
              </div>
              <span className="card_icon">
                {" "}
                <i className="fa-sharp fa-solid fa-arrow-right" />{" "}
              </span>
            </div>
            <div className="card3 card1">
              <div className="card1_pic">
                <img src={CardPic1} alt="" />
                {/* <img src={CardPic} alt=""> */}
              </div>
              <div className="card3_txt">
                <h2>WEB DESIGNER</h2>
                Lorem ipsum dolor sit amet.
              </div>
              <span className="card_icon">
                {" "}
                <i className="fa-sharp fa-solid fa-arrow-right" />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default About