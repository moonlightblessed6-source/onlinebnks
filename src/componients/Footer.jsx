import React from 'react'
import {Footers} from './styled'
import { Link } from 'react-router-dom'
import ncua from '../assets/logo/NCUA-logo-3604605f.webp'
import cdfi from '../assets/logo/cdfi_logo_bw-3a2d14f8.webp'
import fheo from '../assets/logo/fheo300-b3cc96a5.webp'

const Footer = () => {
  return (
    <Footers>
      <div className="footerwrapper">
        <div className="temss">
          <div>
            
            <ul>
              <h5><strong>About</strong></h5>
                <li>Our Company</li>
                <li>Social Impact</li>
                <li>Careers</li>
                <li>Investor Relations</li>
                <li>Suppliers</li>
                <li>Media Center</li>
            </ul>
          </div>

          <div>
     
            <ul>
              <h5><strong>Business Solutions</strong></h5>
                <li>Corporate Finance</li>
                <li>Dealer Services</li>
                <li>Ally Ventures</li>
            </ul>
          </div>

          <div>
            <ul>
               <h5><strong>Learn</strong></h5>
                <li>Conversationally</li>
                <li>Financial Education Programs</li>
                <li>Mortgage Assistance</li>
            </ul>
          </div>

          <div>

            <ul>
                <h5><strong>Resources</strong></h5>
                <li><Link style={{color: 'whitesmoke'}}>Contact</Link></li>
                <li>Give Feedback</li>
                <li>ATM Locator</li>
                <li>Site Map</li>
                <li>Shop JETSTREAM Gear</li>
                <li>Accessibility</li>
            </ul>
          </div>

          <div>

            <ul>
              <h5><strong>Terms & Privacy</strong></h5>
                <li>JETSTREAM Invest Disclosures</li>
                <li>Legal</li>
                <li>Privacy</li>
                <li>Security</li>
                <li>Targeted Advertising Preferences</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="bottonlast">
            <p>©2009-2025 JETSTREAM Financial Inc.</p>
        </div>
      </div>

         <div className="wedobsiness">
          <img src={cdfi} alt="cdfi" />
          <img src={fheo} alt="fheo" />
          <img src={ncua} alt="ncua" />
        </div>
        <div>
          <p className='mrp'>We do business in accordance with the Federal Fair Housing Law and Equal Credit Opportunity Act.</p>
        </div>
    </Footers>
  )
}

export default Footer
