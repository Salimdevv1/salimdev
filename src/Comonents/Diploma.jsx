import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
export default function Diploma() {
  useEffect(()=>{
    Aos.init({duration : 1800})
  })
  return (
    <div data-aos="fade-left">
        <h2   style={{textAlign :"center" , marginTop :70 , textDecoration : "underline" , textUnderlineOffset : 10 , color :"black"}}>
           Success Stories
        </h2>
        <center><div className='diplome'>
            <img src="/assets/gmc1.png" alt=""  />
            <img src="/assets/gmc2.png" alt="" />
        </div></center>
        <p></p>
    </div>
  )
}
