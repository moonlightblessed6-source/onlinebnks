import React  from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo/js_logo_placeholder.svg'
import {Navbar} from './styled'
import { TiThMenu } from "react-icons/ti";





const Nav = () => {

  const navagate = useNavigate();
  const isLogin = !!localStorage.getItem('authToken');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navagate('/login');

   
  }
    return(
      // <img src={ally} alt="ally" />
        <Navbar>
          <div className="bottonline">
        <div className="navwrapper">
         <div className="leftLogo">
          <span>Routing number 267080355</span>
         </div>
          <div className="rightItems">
             <div className="atag">
              <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link>Help</Link>
             </div>
            <div className="btn">
              {isLogin ? (
              <Link onClick={handleLogout}><button>Logout</button></Link>
              ):(
               <Link to='/login'><button>Secure Login</button></Link>
              )}
            
            
            </div>
          </div>
        </div>
          </div>


           <div className="bottonwrapper">
            
          <div className="downnav">
            <div className="menuw"><TiThMenu style={{fontSize: '30px', color: 'black'}} /></div>
            <div className="left"><img src={logo} alt="logo" /></div>

            <div className="right">
              {isLogin ? (
              <div style={{display: 'flex', gap: '16px'}}>
              <Link to='/' style={{color: 'black'}}>Home</Link>
              <Link to='/account' style={{color: 'black'}}>Account</Link>
              <Link to='/account/transfer' style={{color: 'black'}}>Transfer</Link>
              <Link to='/account/profile' style={{color: 'black'}}>Profile</Link>
              
              </div>
              ):(
              <div style={{display: 'flex', gap: '16px'}}>
               <Link style={{color: 'black'}}>Personal</Link>
              <Link style={{color: 'black'}}>Business</Link>
              <Link style={{color: 'black'}}>Resources</Link>
              <Link style={{color: 'black'}}>Insurance</Link>
              </div>
              )}



            </div>
          </div>
           </div>
        </Navbar>
    )
}

export default Nav