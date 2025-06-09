import React from "react";
import { Link } from "react-router-dom";
import ally from '../assets/logo/ally.png'
import {Navbar} from './styled'

const Nav = () => {
    return(
        <Navbar>
          <div className="bottonline">
        <div className="navwrapper">
         <div className="leftLogo">
            <img src={ally} alt="ally" />
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
        </Navbar>
    )
}

export default Nav