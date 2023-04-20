import React from 'react'
import '../styles/about.css'

const About = () => {
  return (
    <div className='main-page'>
        <div className='main-container-about'>
        <div className='left-container'>
    
         {/* <img src='https://preview.colorlib.com/theme/stories/images/about.jpg' alt='img'/> */}
        </div>
        <div className='right-container'>

        <h1>About Stories  <span className='ss' style={{color:'yellow',fontSize:"60px"}}>.</span></h1>
        <p className='far' >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        <div className='containers'>
            <div className='container'>
                <h2>10</h2>
                <p style={{marginTop:"10px",fontSize:"20px"}}>Years of Experienced</p>
            </div>
            <div className='container'>
                <h2>200</h2>
                <p style={{marginTop:"10px" ,fontSize:"20px"}}>Foods</p>
            </div>
            <div className='container'>
                <h2>300</h2>
                <p style={{marginTop:"10px",fontSize:"20px"}}>Lifestyle</p>
            </div>
            <div className='container'>
                <h2>40</h2>
                <p style={{marginTop:"10px",fontSize:"20px"}}>Happy Customers</p>
            </div>
            
        </div>
        

        </div>

        </div>
    </div>
  )
}

export default About