import React from 'react'
import busimness from '../assets/personal/business.png'
import {Businessnav} from './styled'
import { Link } from 'react-router-dom'

const Business = () => {
  return (
    <Businessnav>
      
      <div className="banner">
        <img src={busimness} alt="" />
      </div>

      <div className="busineserapper">
        
        <div className="business">

            <div className="save">
                <span>SAVE</span>
                <div className='line'></div>
            </div>
            <div className="cards">
             <div>
                <div className="heading">
                   <span>Business Savings</span> 
                </div>
                <div className="bodies">
                  <p>Our business savings options are designed to be convenient, simple, and flexible.</p>
                  <Link><button>Learn More</button></Link>
                </div>
             </div>
            </div>


            <div className="save">
                <span>SPEND</span>
                <div className='line'></div>
            </div>
            <div className="cards">
             <div>
                <div className="heading">
                   <span>Business Checking</span> 
                </div>
                <div className="bodies">
                  <p>Our business savings options are designed to be convenient, simple, and flexible.</p>
                  <Link><button>Learn More</button></Link>
                </div>
             </div>
             <div>
                <div className="heading">
                   <span>Business Credit Card</span> 
                </div>
                <div className="bodies">
                  <p>With a Business Visa Credit Card you have access to all of the perks and protections of all Visa cards.</p>
                  <Link><button>Learn More</button></Link>
                </div>
             </div>
             <div>
                <div className="heading">
                   <span>Business Debit Card</span> 
                </div>
                <div className="bodies">
                  <p>Make purchases quickly and easily with your JetStream Federal Visa Business Debit Card.</p>
                  <Link><button>Learn More</button></Link>
                </div>
             </div>
            </div>

            <div className="save">
                <span>BORROW</span>
                <div className='line'></div>
            </div>
            <div className="cards">
             <div>
                <div className="heading">
                   <span>Business Loans</span> 
                </div>
                <div className="bodies">
                  <p>With a wide range of business products to choose from, JetStream Federal Credit Union can easily fulfill all of your business needs.</p>
                  <Link><button>Learn More</button></Link>
                </div>
             </div>
   
            </div>
        </div>

      </div>


    </Businessnav>
  )
}

export default Business
