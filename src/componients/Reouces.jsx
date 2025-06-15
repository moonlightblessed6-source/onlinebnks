import React from 'react'
import Reouces from '../assets/personal/Reouces.png'
import { Link } from 'react-router-dom'
import {Resoucesss} from './styled'

const Reouce = () => {
  return (
    <Resoucesss>
        <div className="banner">
            <img src={Reouces} alt="eeouces" />
        </div>




              <div style={{backgroundcolor: '#f9f8f6', border: '0.3px solid #f9f8f6'}}>
     <div className="sectionOne">
        <div className="save">
         <span><strong>DIGITAL</strong></span>
         <div className='linebutton'></div>
        </div>

        <div className="cards">
          
          <div>
            <div className='heading'><h3>Online Banking</h3></div>
            <div className='writeup'>
            <p>Manage all your accounts from one location.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Mobile Banking</h3></div>
            <div className='writeup'>
            <p>Manage all your accounts while on the go!</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Make a Payment</h3></div>
            <div className='writeup'>
            <p>Options for making payments on your loans.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
         
          </div>
        </div>



     <div className="sectionOne">
        <div className="save">
         <span><strong>INFORMATION</strong></span>
         <div className='linebutton'></div>
        </div>

        <div className="cards">
          
          <div>
            <div className='heading'><h3>Financial Calculators</h3></div>
            <div className='writeup'>
            <p>Start planning and set a yourself up to achieve your financial goals.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Holiday Closings</h3></div>
            <div className='writeup'>
            <p>Is it a bank holiday?<br /> <br /> Check here –</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Fraud Prevention</h3></div>
            <div className='writeup'>
            <p>Tools and information to keep <br /><br />yourself safe.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Education</h3></div>
            <div className='writeup'>
            <p>Visit the JetStream Financial Wellness website to buff up your financial skills.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Fee Schedule</h3></div>
            <div className='writeup'>
            <p>Understand fees related to our accounts and services. <br /><br /></p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>

         
          </div>
        </div>


         <div className="sectionOne">
        <div className="save">
         <span><strong>Resources</strong></span>
         <div className='linebutton'></div>
        </div>

        <div className="cards">
          
          <div>
            <div className='heading'><h3>Insurance</h3></div>
            <div className='writeup'>
            <p>JetStream has partnered with insurance industry leaders to help get our members the best rates.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Auto Advisors</h3></div>
            <div className='writeup'>
            <p>Helping members get fair and competitive deals on new or used vehicles.<br /> <br /></p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Reorder Checks</h3></div>
            <div className='writeup'>
            <p>Visit OrderMyChecks.com to get a new supply. <br /> <br /><br /></p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Lost or Stolen Cards</h3></div>
            <div className='writeup'>
            <p>How to lock or unlock your cards, or report missing cards.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Community</h3></div>
            <div className='writeup'>
            <p>Partnerships with the community and local businesses.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
          <div>
            <div className='heading'><h3>Apply for a Loan</h3></div>
            <div className='writeup'>
            <p>Apply online for a loan from JetStream.</p>
            <button><Link>Learn More</Link></button>
            </div>
          </div>
         
          </div>
        </div>



 
      </div>
      
    </Resoucesss>
  )
}

export default Reouce


