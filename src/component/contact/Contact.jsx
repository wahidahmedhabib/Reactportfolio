import React, { useEffect, useRef, useState } from 'react'
import './contact.css'
function Contact() {

//   const [urls, setUrls] = useState([])
//   const [textcontent, settextcontent] = useState('')
//     const resizetext = useRef('')


//     useEffect(() => {
//         const textAreaFun = () => {
//           resizetext.current.style.height = '100px'
//           resizetext.current.style.height = resizetext.current.scrollHeight + 10 + 'px'
//         }
//         // const urlRegex = /(https?:\/\/[^\s]+)/g;
//         // let allUrl = textcontent.match(urlRegex);
    
//         // console.log(allUrl || []);
//         // setUrls(allUrl || [])
//         textAreaFun()
//       }, [textcontent])
    return (
        <>
            <div className='contact_section'>
                <div className='contact_info'>
                    <div className="contact_num">
                        <div className="contact_icon">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className='contact_para'>

                            <h5>phone</h5>
                            <p>+92344-5800168</p>
                        </div>
                    </div>
                    <div className="contact_num">
                        <div className="contact_icon">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div className='contact_para'>

                            <h5>E-mail</h5>
                            <p>Wahidahmed221098@gmaiil.com</p>
                        </div>
                    </div>
                    <div className="contact_num">
                        <div className="contact_icon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className='contact_para'>

                            <h5>Address</h5>
                            <p>korangi karachi pakistan</p>
                        </div>
                    </div>

                </div>

                <div className='form_container'>
                    <h1>Let’s work together!</h1>
                    <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                    <form className='form_box' >
                        <div className='input_box'>
                            <div className='inp'>
                                <input placeholder='first-name' type="text" />
                            </div>
                            <div className='inp'>
                                <input placeholder='last-name' type="text" />
                            </div>
                        </div>
                        <div className='input_box'>
                            <div className='inp'>
                                <input placeholder='E-mail' type="email" />
                            </div>
                            <div className='inp'>
                                <input placeholder='Phone Number' type="number" />
                            </div>
                        </div>
                        <select className='dropDown'>
                            <option className='opt' defaultValue={'pak'} value="name">Chopse Service</option>
                            <option className='opt' value="pak">pak</option>
                            <option className='opt' value="ind">ineed</option>
                            <option className='opt' value="uae">uae</option>
                            <option className='opt' value="usa">usa</option>
                        </select>
                        <div className='textArea_section'>
                            {/* <textarea
                                ref={resizetext}
                                value={textcontent}
                                placeholder='Type Somthing...'
                                onChange={(e) => {
                                    e.target.value != ' ' ?
                                        settextcontent(e.target.value) : ''
                                }}



                            /> */}
                           
                            <textarea placeholder='message' cols="30" rows="10"></textarea>
                        </div>
                        <button  className='formBtn'>Send Message</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Contact