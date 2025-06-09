import React from 'react'
import {Footers} from './styled'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Footers>
      <div className="footerwrapper">
        <div className="temss">
          <div>
            <h3>About</h3>
            <ul>
                <li>Our Company</li>
                <li>Social Impact</li>
                <li>Careers</li>
                <li>Investor Relations</li>
                <li>Suppliers</li>
                <li>Media Center</li>
            </ul>
          </div>

          <div>
            <h3>Business Solutions</h3>
            <ul>
                <li>Corporate Finance</li>
                <li>Dealer Services</li>
                <li>Ally Ventures</li>
            </ul>
          </div>

          <div>
            <h3>Learn</h3>
            <ul>
                <li>Conversationally</li>
                <li>Financial Education Programs</li>
                <li>Mortgage Assistance</li>
            </ul>
          </div>

          <div>
            <h3>Resources</h3>
            <ul>
                <li><Link>Contact</Link></li>
                <li>Give Feedback</li>
                <li>ATM Locator</li>
                <li>Site Map</li>
                <li>Shop Ally Gear</li>
                <li>Accessibility</li>
            </ul>
          </div>

          <div>
            <p>Terms & Privacy</p>
            <ul>
                <li>Ally Invest Disclosures</li>
                <li>Legal</li>
                <li>Privacy</li>
                <li>Security</li>
                <li>Targeted Advertising Preferences</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="bottonlast">
            <p>©2009-2025 Ally Financial Inc.</p>
        </div>
      </div>
    </Footers>
  )
}

export default Footer
