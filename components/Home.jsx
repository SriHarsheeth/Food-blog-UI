import React from 'react'

import '../styles/home.css'
import Navbar from './Navbar';

const Home = () => {
  console.log("hi");
  return (
   
    
     <div className='main-page'>
     <Navbar/>
    <div className='main-container-home'>
     <div className='top-left'>
     <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://preview.colorlib.com/theme/stories/images/bg_1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="	https://preview.colorlib.com/theme/stories/images/bg_2.jpg" className="d-block w-100" alt="..."/>
    </div>
   
  </div>
</div>
     </div>
     <div className='top-right'>
    <div className='top-right-top'>
    <div className='content mt-5'>
    <div className='content-1'>
    <span> FEATURED POSTS</span>
    </div>
    <div className='content-2'>
      <h1>I Am A </h1>
      <h1>Blogger & I</h1>
      <h1>Love Food</h1>
      <hr ></hr>
      </div>
      
      
      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
      <button>Read More<i className='bx bx-right-arrow-alt' ></i></button>
     </div>
     </div>
     <div className='top-right-bottom'>
        <div className='forward'>
         <h4><i className='bx bx-left-arrow-alt' ></i>Forward  </h4>
        </div>
        <div className='backward'>
        <h4>Next<i className='bx bx-right-arrow-alt'></i> </h4>
        </div>
     </div>
       
     </div>
    </div>

    </div> 
  
   
  )
}

export default Home