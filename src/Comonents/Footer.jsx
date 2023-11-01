import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer style={{marginTop : 60 , padding : 20 }}>
        <div style={{display :"flex" , justifyContent:"center" , gap :5}}>
            <box-icon name='copyright' type='solid' ></box-icon> 
            <p style={{fontWeight :"bold"}}> 2023</p>
            <p style={{fontWeight :"bold"}}>Salim's Portfolio</p>
        </div>
        <div style={{display :"flex" , justifyContent :"center" , alignItems :"center" , }}>
            Created by <a href="https://www.instagram.com/slama.selim/" style={{marginLeft :5 , textDecoration :"none" , color :"red" , fontWeight :"bold" , fontSize : 20}}>Salimdev</a>
        </div>
        </footer>
    </div>
  )
}
