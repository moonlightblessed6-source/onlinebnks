import React from 'react'
import {ContactUs} from './styled'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { MdPhoneCallback } from "react-icons/md";
import { IoChatboxOutline } from "react-icons/io5";



const contact = () => {
  return (
    <ContactUs>
      <div className="contactwrapper">
        <div className="nav">
         <div>
            <Link to='/'>Home</Link>
            <IoIosArrowForward style={{verticalAlign: 'middle'}} />
            <Link>Contact Us</Link>
         </div>
        </div>
        <div className="form">
            <h2>Contact</h2>
            <div className='contactwrapers'>
                <div>
                    <p>Hard of hearing</p>
                    <p>For all account types</p>
                </div>
                <div>
                    <div className='cals'>
                        <div><MdPhoneCallback style={{fontSize: '23px'}}/> </div>
                         <div>
                         <p> Call</p>
                        <p>General</p>
                         </div>
                    </div>
                <p>711</p>
                <p>Have the phone number you’re trying to reach ready</p>
                </div>

            </div>
        </div>
      </div>
      <hr />

      <div className='bank'>
       <div>
        <h2>Bank</h2>
       </div>
       <div style={{display: 'flex', gap: '0.4rem', alignItems: 'center'}}>
        <div><IoChatboxOutline style={{fontSize: '23px'}} /></div>
        <div>
        <p>Chat</p>
        <span><Link>Login</Link> To Chat</span>
        </div>
       </div>
       <div style={{display: 'flex', gap: '0.4rem', alignItems: 'center'}}>
        <div><MdPhoneCallback style={{fontSize: '23px'}} /></div>
        <div>
        <p>Call</p>
        <p>1-877-247-2559</p>
        <p>Open 24/7</p>
        <h4>Outside the U.S.</h4>
        <p>+1-757-247-2559</p>
        </div>
       </div>
      </div>
    </ContactUs>
  )
}

export default contact
