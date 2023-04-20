import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='main-page'>
    <div className='main-container-footer'>
       <h1>Subcribe to our Newsletter <span>.</span></h1>
       <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
        It is a paradisematic country, in which roasted parts of sentences fly into your mouth</p>
        <input type='email' placeholder='Enter email Address'/>
        <button>Subscribe</button>
    </div>

    </div>
  )
}

export default Footer