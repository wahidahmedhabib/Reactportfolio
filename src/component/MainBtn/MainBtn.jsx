import React from 'react'
import Link1 from '../../images/link (1).png'
import Link2 from '../../images/link (2).png'
import Link3 from '../../images/link (3).png'
import Link4 from '../../images/link (4).png'
import './mainBtn.css'
import { Link } from 'react-router-dom'
function MainBtn() {
  const google = () => {
    window.open = 'http://www.google.com'
  }
  return (
    <div>
      <div className="btn_bar">
        <a href='https://www.linkedin.com' target='_blank' className="meta">
          {/* <img src="images/meta.png" alt=""> */}
          {/* <i class="fa-brands fa-meta"></i>Meta */}
          <img src={Link1} height="100px" alt="" />
        </a>
        <a href='https://slack.com' target='_blank' className="google">
          {/* <i class="fa-brands fa-google"></i>oogle */}
          <img src={Link2} height="60px" alt="" />
        </a>
        <a href='https://www.meta.com' target='_blank' className="linkedin">
          {/* Linked<i class="fa-brands fa-google"></i> */}
          <img src={Link3} height="130px" alt="" />
        </a>
        <a href='http://www.google.com' target='_blank' className="slack">
          <img src={Link4} height="35px" alt="" />
          {/* <i class="fa-brands fa-slack"></i>Slack */}
        </a>
      </div>
    </div>
  )
}

export default MainBtn