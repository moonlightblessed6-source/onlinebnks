import React from 'react'
import { Link } from 'react-router-dom'
import {Homepagemain} from './styled'
import One from '../assets/carousel/One.webp'
import Two from '../assets/carousel/Two.webp'
import Three from '../assets/carousel/Three.webp'
import Four from '../assets/carousel/Four.webp'
import five from '../assets/carousel/five.webp'

const Homepage = () => {
  return (
    <Homepagemain>
        <div style={{background: '#007cba'}}>
      <div className="carouselwrappeer">
        <div className='securelogin'>
            <h3 style={{textAlign: 'center'}}>Online Banking</h3>
           <hr style={{ borderColor: 'black' }} />
        <div className="loginform">
        
        <Link> <button>Secure Login</button></Link>
        <Link>Enroll Now!</Link>
        </div>
        </div>

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
        </div>

      </div>
      </div>

      </Homepagemain>
  
  )
}

export default Homepage
