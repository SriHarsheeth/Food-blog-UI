import React from 'react'
import '../styles/nav.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='main-nav'>
    <div className='main-container'>
     <div className='nav-left'>    
       <h3><b>Stories</b> <span style={{color:"yellow",fontSize:"50px"}}> .</span></h3>
    </div>
    <div className='nav-right'>
    
    <Link to ={'/home'}>Home</Link>
    <Link to ={'/about'}>About</Link>
    <Link to ={'/food'}>Foods</Link>
    <Link to ={'/lifestyle'}>Lifestyle</Link>
    <Link to ={'/contact'}>Contact</Link>
   

    </div>
    </div>
    </div>
  )
}

export default Navbar