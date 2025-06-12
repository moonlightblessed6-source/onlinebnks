import React from 'react'
import { Link } from 'react-router-dom'
import {Homepagemain} from './styled'
import One from '../assets/carousel/One.webp'
import Two from '../assets/carousel/Two.webp'
import Three from '../assets/carousel/Three.webp'
import { BsCashCoin } from "react-icons/bs";
import { FaCarAlt, FaLaptopHouse} from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";
import easyvex from '../assets/homepage/easyvest-your_choice-da6a93e9.webp'
import Explained from '../assets/homepage/HELOC-Explained-9b5530db.webp'
import Chataing from '../assets/homepage/Luis-Chataing-8d780b77.webp'
import jean from '../assets/homepage/Jeanne-Kucey-1cc4893a.webp'
import kristi from '../assets/homepage/kristi-9c94ba5d.webp'

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


      <div className="apply">
        <button className='btnn'>Become a Member</button>
        <button className='btnn'>Apply for a Loan</button>
        <button className='btnn'>Make a Payment</button>
      </div>



      <div className="loanwraper">
        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column'}}>
          <BsCashCoin style={{ color: '#007cba', fontSize: '30px'}} />
          <h5>Personal Loans</h5>
          <span>High debt?</span>
          <span>Consolidate now.</span>
 
          <span>As low as</span>
          <p>9.99%</p>
          <Link>Apply Now</Link>
        </div>
        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column'}}>
          <FaCarAlt style={{ color: '#007cba', fontSize: '30px'}} />
          <h5>Auto Loans</h5>
          <span>Upgrade your ride,</span>
          <span>lower your rate.</span>
          <span>As low as</span>
          <p>4.99%</p>
          <Link>Get Started</Link>
        </div>
        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column'}}>
          <FaLaptopHouse style={{ color: '#007cba', fontSize: '30px'}}/>
          <h5>HELOC</h5>
          <span>Need cash?</span>
          <span>Use your equity.</span>
          <span>As low as</span>
          <p>2.99%</p>
          <Link>Learn more</Link>
        </div>
        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column'}}>
         <FiCreditCard  style={{color: '#007cba', fontSize: '30px'}}/>
          <h5>Credit Cards</h5>
          <span>High rates?</span>
          <span>Save with ours.</span>
          <span>As low as</span>
          <p>13.15%</p>
          <Link>Apply now</Link>
        </div>
      </div>


      <div className="Bankings">
        <h5><strong>Banking That Puts You First</strong></h5>
        <div className="Bankingwrapprs">
          <h6>Join <strong>JetStream FCU</strong>, a trusted financial partner with <strong>75 years of experience</strong> and <strong>$238M in assets</strong>. Whether you live, work, worship, or study in <strong>Miami-Dade or Puerto Rico</strong>, you’re <strong>eligible to join!</strong></h6>
          <ul>
            <li><strong>FREE</strong> State-of-the-Art Online Banking</li>
            <li><strong>FREE</strong> Checking & Membership Savings</li>
            <li><strong>Market-Leading Rates</strong></li>
            <li><strong>100,000+ FEE-FREE ATMs & Branches</strong></li>
           
          </ul>
          <h6>Bank smarter. Live better.</h6>
          <button className='btn' style={{marginBottom: '2rem'}}><Link style={{color: 'whitesmoke', textDecoration: 'none'}}>Join Today!</Link></button>
        </div>
      </div>


<div className="tools">
  <h1 style={{margin: 'auto', width: '90%', fontSize: '25px'}}>Tools to Power Your Growth</h1>
  <div className="toolswrpper">
    <div className='wrap'>
      <div className='imgdiv'><img src={Explained} alt="Explained" style={{width: '100%', height: '400px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}} /></div>
        <div className='wrote'>
        <h4 style={{color: '#007cba'}}>HELOC Explained:</h4>
        <h4>When NOT to use it!</h4>
        <h4>JetStream explains when a HELOC may not be the best financial choice.</h4>
        </div>
      </div>

    <div className='wrap'>
      <div className='imgdiv'><img src={Chataing} alt="Chataing" style={{width: '100%', height: '400px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}} /></div>
        <div className='wrote'>
        <h4 style={{color: '#007cba'}}>Aclarando dudas con Luis Chataing.</h4>
        <h4>Podcast.</h4>
        <h4>Luis Chataing ofrece consejos financieros con humor, respondiendo preguntas frecuentes y brindando recomendaciones</h4>
        </div>
      </div>

    <div className='wrap'>
      <div className='imgdiv'><img src={jean} alt="Explained" style={{width: '100%', height: '400px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}} /></div>
        <div className='wrote'>
        <h4 style={{color: '#007cba'}}>CEO Jeanne Kucey's Surprise:</h4>
        {/* <h4>When NOT to use it!</h4> */}
        <h4>Jetstream FCU's 75th Anniversary & Home Help Rehab Loan Launch!</h4>
        </div>
      </div>

    <div className='wrap'>
      <div className='imgdiv'><img src={kristi} alt="Explained" style={{width: '100%', height: '400px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}} /></div>
        <div className='wrote'>
        <h4 style={{color: '#007cba'}}>Making a Difference:</h4>
        <h4>How JetStream Supports Kristi House</h4>
        <h4>JetStream proudly partners with Kristi House to support families and children affected by abuse.</h4>
        </div>
      </div>


  </div>
</div>


      <div className="EasyVest">
       <h1 style={{width: '90%', margin: 'auto', fontSize: '30px'}}>EasyVest Investment Options:</h1>
       <div className="EasyVestwraper">
        <div ><img src={easyvex} alt="easyvex" style={{width: '530px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}} /></div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center'}}>
          <h3 style={{fontSize: '25px'}}>EasyVest Automated Digital Advisor</h3>
          <h4>Effortless Investing for Your Future: Invest, Grow, Achieve – All in One User-Friendly Platform</h4>
          <h4>Start with just $200. Let EasyVest’s automated advisor create a personalized investment strategy for you, analyzing live market data to optimize your portfolio automatically.</h4>

          <ul>
            <li>Personalized Portfolio Strategy: Answer a few questions, and EasyVest instantly builds a diversified portfolio tailored to your goals.</li>
            <li>Effortless Automated Investing: EasyVest constantly monitors and adjusts your portfolio, keeping it aligned with your financial objectives.</li>
            <li>Start with Just $200: Add funds at any time, or set up recurring transfers from your JetStream FCU account.</li>
            <li>Low-cost Exchange Traded Funds (ETFs)</li>
            <li>Easily move securities from your other brokerage accounts into EasyVest</li>
          </ul>
        </div>
       </div>

      </div>


   

      </Homepagemain>
  
  )
}

export default Homepage
