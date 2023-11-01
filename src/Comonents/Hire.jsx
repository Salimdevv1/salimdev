import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Hire() {
  useEffect(()=>{
    Aos.init(()=>{
      duration: 1800
    })
  })
  return (
    <div data-aos="fade-up" >
        {/* <div className='hire'>
          <h2 style={{textAlign :"center" , marginTop :70 , textDecoration : "underline" , textUnderlineOffset : 10}}>
              Let's Talk About A Project
          </h2>
          <p>I'd be happy to discuss a project with you. Could you please provide more details about the project you'd like to talk about?</p>
          <a href="https://www.instagram.com/slama.selim/" className='contact-btn'>Let's talk</a>
      </div> */}
      <h2 style={{textAlign :"center" , marginTop :70 , textDecoration : "underline" , textUnderlineOffset : 10}}>
              Let's Talk About A Project
        </h2>
      <div className='contact-container'>
        <div className='salimdev'>
          <p>I look forward to working with clients who have an eye for detail and a love of high quality. If you are searching for a Frond-end Developer, i would be delighted to quote for your project.</p>
          <div class="info-box">
                    <i class='bx bxs-envelope'></i>
                    <a href="mailto:slam.salim2006@gmail.com" style={{textDecoration :"none" ,fontSize : 18}}><span style={{marginLeft :5 , textDecoration : "underline" , textUnderlineOffset : 5 , fontWeight : "bold"}}>slam.salim2006@gmail.com</span></a>
                </div>
        </div>
        <div className='form'>
          <form action="https://airform.io/slam.salim2006@gmail.com" method="post">
              <input type="text" name="name" required placeholder='Full name' />
              <input type="email" name="email" required placeholder='Email address' />
              <textarea name="message" id="" rows="7" required placeholder='Message'></textarea>
              <button>Get in Touch</button>
          </form>
        </div>
      </div>
    </div>
  )
}
