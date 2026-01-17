import React from 'react'
import {Personalpr} from './styled'
import personalBanner from '../assets/personal/personal.png'
import { Link } from 'react-router-dom'

const Personal = () => {
  return (
    <Personalpr>
     <div className="bann">
        <img src={personalBanner} alt="personalBanner" />
     </div>

      <div style={{backgroundcolor: '#f9f8f6', border: '0.3px solid #f9f8f6'}}>
     <div className="sectionOne">
        <div className="save">
         <span><strong>SAVE</strong></span>
         <div className='linebutton'></div>
        </div>

        <div className="cards">
          
          <div>
            <div className='heading'><h3>Savings</h3></div>
            <div className='writeup'>
            <p>Simple savings accounts to help you reach your goals.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Certificate Accounts</h3></div>
            <div className='writeup'>
            <p>Safely invest your money with a higher rate of return.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Money Market</h3></div>
            <div className='writeup'>
            <p>Jet fuel your savings with even higher returns.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>IRA</h3></div>
            <div className='writeup'>
            <p>Save for retirement with JetStream's IRA options.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Generational Accounts</h3></div>
            <div className='writeup'>
            <p>JetStream offers accounts for everybody.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
         
          </div>
        </div>



     <div className="sectionOne">
        <div className="save">
         <span><strong>SPEND</strong></span>
         <div className='linebutton'></div>
        </div>

        <div className="cards">
          
          <div>
            <div className='heading'><h3>Checking</h3></div>
            <div className='writeup'>
            <p>Take control of your spending with simple, no-fee checking!</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Credit Cards</h3></div>
            <div className='writeup'>
            <p>Great rates, enhanced protection, and no annual fees!</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>

         
          </div>
        </div>


         <div className="sectionOne">
        <div className="save">
         <span><strong>BORROW</strong></span>
         <div className='linebutton'></div>
        </div>

        <div className="cards">
          
          <div>
            <div className='heading'><h3>Personal Loans</h3></div>
            <div className='writeup'>
            <p>Borrow up to $20,000 for any purpose.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>HELOC</h3></div>
            <div className='writeup'>
            <p>Fund life's big expenses at lower interest rates.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Mortgages</h3></div>
            <div className='writeup'>
            <p>JetStream has a mortgage option perfect for YOU!</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Home Help Loan</h3></div>
            <div className='writeup'>
            <p>We can help improve your home. today</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
         
          </div>
        </div>



         <div className="sectionOne">
        <div className="save">
         <span><strong>VEHICLE LOANS</strong></span>
         <div className='linebutton'></div>
        </div>

        <div className="cards">
          
          <div>
            <div className='heading'><h3>Auto Loans</h3></div>
            <div className='writeup'>
            <p>JetStream makes buying a new car simple and flexible.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Motorcycle Loans</h3></div>
            <div className='writeup'>
            <p>Low Rates for New and Used Motorcycles</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>RV Loans</h3></div>
            <div className='writeup'>
            <p>Explore the open road! Affordable rates.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Boat Loans</h3></div>
            <div className='writeup'>
            <p>Your gateway to water adventure!</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
         
          </div>
        </div>

        
         <div className="sectionOne">
        <div className="save">
         <span><strong>INVEST</strong></span>
         <div className='linebutton'></div>
        </div>

        <div className="cards">
          
          <div>
            <div className='heading'><h3>EasyVest</h3></div>
            <div className='writeup'>
            <p>Effortless investing for your future.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>

      
  
         
          </div>
        </div>

 
      </div>
    </Personalpr>
  )
}

export default Personal
