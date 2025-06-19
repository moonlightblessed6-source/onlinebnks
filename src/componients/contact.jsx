import React from 'react'
import {ContactUs} from './styled'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
// import { MdPhoneCallback } from "react-icons/md";
// import { IoChatboxOutline } from "react-icons/io5";



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
        </div>
      
      
        <div className="contactus">
          
          <div className='contactwrapper'>
            <h1><span style={{ color: '#007cba'}}><strong>Email</strong></span> Us</h1>
            <div>

            <p><strong>Member Services: </strong><span style={{ color: '#5a7cba'}}>info@fcujetscreem.org</span></p>
            <p><strong>Loans: </strong><span style={{ color: '#5a7cba'}}>lending@fcujetscreem.org</span></p>
            <p><strong>Human Resources: </strong><span style={{ color: '#5a7cba'}}>humanresources@fcujetscreem.org</span></p>
            </div>
            <h1><span style={{ color: '#007cba'}}><strong>Call</strong></span> Us</h1>
            <div>
            <p><strong>Telephone number: </strong><span>(667) 493-9316 </span></p>
            <ul>
              <li>To <span style={{color: '#eb6852'}}>report a lost or stolen Debit or ATM Card</span>, please contact our 24 hour hotline at <strong>1-667-493-9316.</strong></li>
            <li>To <span style={{color: '#eb6852'}}>change your PIN on your Debit or ATM Card</span>, call <strong>1-667-493-9316.</strong></li>
            <li>If you receive a call from our monitoring department that your <span style={{color: '#eb6852'}}> card is blocked for irregular activity</span>, please call <strong>1-667-493-9316.</strong></li>
            </ul>
            </div>
            <h1><span style={{ color: '#007cba'}}><strong>Write</strong></span> Us</h1>
            <div>
           <p><strong>JetStream Federal Credit Union </strong></p>
           <span>P.O. Box 5487 </span>
           <span>Miami Lakes, FL 33014-1487</span>
            </div>

          </div>


{/* ============================== */}
          <div className='lasrtcon'>
            <h2>More About JetStream</h2>
            <ul>
              <li><Link to='/about'>About JetStream FCU</Link></li>
              <li>Board of Directors</li>
              <li>Senior Management</li>
              <li>Annual Reports</li>
              <li>Press Releases</li>
              <li>Observed Holidays</li>
            </ul>
          </div>
        </div>

    </ContactUs>
  )
}

export default contact
