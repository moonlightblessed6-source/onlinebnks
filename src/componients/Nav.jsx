import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo/js_logo_placeholder.svg'
import {Navbar} from './styled'

const Nav = () => {
    return(
      // <img src={ally} alt="ally" />
        <Navbar>
          <div className="bottonline">
        <div className="navwrapper">
         <div className="leftLogo">
          <p>Routing number 267080355</p>
         </div>
          <div className="rightItems">
             <div className="atag">
              <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link>Help</Link>
             </div>
            <div className="btn">
            <button type="submit">Login</button>
            </div>
          </div>
        </div>
          </div>


           <div className="bottonwrapper">
            
          <div className="downnav">
            <div className="left"><img src={logo} alt="logo" /></div>

            <div className="right">
              <Link style={{color: 'black'}}>Personal</Link>
              <Link style={{color: 'black'}}>Business</Link>
              <Link style={{color: 'black'}}>Resources</Link>
              <Link style={{color: 'black'}}>Insurance</Link>
            </div>
          </div>
           </div>
        </Navbar>
    )
}

export default Nav