import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Projects() {
    useEffect(()=>{
        Aos.init({duration : 1700})
    })
  return (
    <div  data-aos="fade-right">
        <div className='container'>
        <h2 style={{textAlign :"center" , marginTop :70 , textDecoration : "underline" , textUnderlineOffset : 10}}>
            Projects
        </h2>
        <div className='container'>
    <div class="container" style={{marginTop : 50}}>
    <div style={{display :"flex" , justifyContent :"center" , alignItems :"center"}} >
            <div className="movies">Movies App</div>
            <div style={{marginLeft : -40 , color :"black" , fontWeight : "bold" ,}}>100%</div>
            </div>
            <div class="skills movie" style={{marginLeft : 1}}></div>
        </div>
        <div class="container" style={{marginTop : 20}}>
        <div style={{display :"flex" , justifyContent :"center" , alignItems :"center"}}>
            <div className="movies">Weather App</div>
            <div style={{marginLeft : -40 , color :"black" , fontWeight : "bold"}}>100%</div>
            </div>
            <div class="skills weather" style={{marginLeft : 1}}></div>
        </div>
        <div class="container" style={{marginTop : 20}}>
            <div style={{display :"flex" , justifyContent :"center" , alignItems :"center"}}>
            <div className="movies">Slam's Food</div>
            <div style={{marginLeft : -40 , color :"black" , fontWeight : "bold"}}>70%</div>
            </div>
            <div class="skills slams" style={{marginLeft : 4}}></div>
        </div>
        <div class="container" style={{marginTop : 20}}>
        <div style={{display :"flex" , justifyContent :"center" , alignItems :"center"}}>
            <div className="movies">Better Spotify</div>
            <div style={{marginLeft : -40 , color :"black" , fontWeight : "bold"}}>10%</div>
            </div>
            <div class="skills spotify" style={{marginLeft : 5}}></div>
        </div>
        <div class="container" style={{marginTop : 20}}>
        <div style={{display :"flex" , justifyContent :"center" , alignItems :"center"}}>
            <div className="movies">Barbaros RP</div>
            <div style={{marginLeft : -50 , color :"black" , fontWeight : "bold"}}>100%</div>
            </div>
            <div class="skills barbaros" style={{marginLeft : 5}}></div>
        </div>
        <div class="container" style={{marginTop : 20}}>
        <div style={{display :"flex" , justifyContent :"center" , alignItems :"center"}}>
            <div className="movies">T ' Shop</div>
            <div style={{marginLeft : -50 , color :"black" , fontWeight : "bold"}}>85%</div>
            </div>
            <div class="skills tshop" style={{marginLeft : 8}}></div>
        </div>
        <div class="container" style={{marginTop : 20}}>
        <div style={{display :"flex" , justifyContent :"center" , alignItems :"center"}}>
            <div className="movies">Ceramique du Centre</div>
            <div style={{marginLeft : -50 , color :"black" , fontWeight : "bold"}}>35%</div>
            </div>
            <div class="skills cerac" style={{marginLeft : 8}}></div>
        </div>
        </div>
        </div>
        
    </div>
  )
}
