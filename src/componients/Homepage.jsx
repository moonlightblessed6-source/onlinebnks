import React from 'react'
import { Link } from 'react-router-dom'
import {Homepagemain} from './styled'
import One from '../assets/carousel/One.webp'
import Two from '../assets/carousel/Two.webp'
import Three from '../assets/carousel/Three.webp'
// import Four from '../assets/carousel/Four.webp'
// import five from '../assets/carousel/five.webp'

const Homepage = () => {
  return (
    <Homepagemain>
        <div style={{background: '#007cba'}}>
      <div className="carouselwrappeer">
        <div className='securelogin'>
            <h3 style={{textAlign: 'center'}}>Online Banking</h3>
           <hr style={{ borderColor: 'black' }} />
        <div className="loginform">
        
        <Link> <button className='btn'>Secure Login</button></Link>
        <Link>Enroll Now!</Link>
        </div>
        </div>
{/* 
       <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={One} className="d-block w-100" alt="One" />
            </div>
            <div className="carousel-item">
              <img src={Two} className="d-block w-100" alt="Two" />
            </div>
            <div className="carousel-item">
              <img src={Three} className="d-block w-100" alt="Three" />
            </div>
            <div className="carousel-item">
              <img src={Four} className="d-block w-100" alt="Four" />
            </div>
            <div className="carousel-item">
              <img src={five} className="d-block w-100" alt="five" />
            </div>
          </div>
        </div> */}



        <div id="demo" className="carousel slide" data-bs-ride="carousel" style={{zIndex: '10'}}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active"><img src={One} alt="One" className="d-block" style={{width:"100%"}} /><div className="carousel-caption"></div></div>
        <div className="carousel-item"><img src={Two} alt="Two" className="d-block" style={{width:"100%"}} /><div className="carousel-caption"></div></div>
        <div className="carousel-item"><img src={Three} alt="Three" className="d-block" style={{width:"100%"}} /><div className="carousel-caption"></div></div>
        {/* <div className="carousel-item"><img src={Four} alt="Four" className="d-block" style={{width:"100%"}} /><div className="carousel-caption"></div></div> */}
        {/* <div className="carousel-item"><img src={five} alt="five" className="d-block" style={{width:"100%"}} /><div className="carousel-caption"></div></div> */}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span></button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next"><span className="carousel-control-next-icon"></span></button>
    </div>

      </div>
      </div>

      </Homepagemain>
  
  )
}

export default Homepage
