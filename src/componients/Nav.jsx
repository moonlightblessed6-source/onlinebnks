import React, { useState }  from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo/js_logo_placeholder.svg'
import {Navbar} from './styled'
import { TiThMenu } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";





const Nav = () => {


const navigate = useNavigate();
const isLogin = !!localStorage.getItem('authToken');

const [meuedisplay, setMeueDisplay] = useState(false);

// Correctly defined logout handler
const handleLogout = () => {
  localStorage.removeItem('authToken');
  navigate('/login');
};

// Correctly defined toggle function (outside of handleLogout)
const toggleDisplay = () => {
  setMeueDisplay(prev => !prev);
};

const closedrop = () => {
  setMeueDisplay(false);
};

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
            {meuedisplay &&(
              <div className="menuwdropdown">
              {isLogin ? (
              <div className="topdropOne">
               <div className="closedrop" onClick={closedrop}><MdOutlineClose /></div>
              <Link to='/' onClick={() => setMeueDisplay(false)}>Home</Link>
              <Link to='/account/dashboard' onClick={() => setMeueDisplay(false)}>Account</Link>
              <Link to='/contact' onClick={() => setMeueDisplay(false)}>Contact Us</Link>
              <Link>Logout</Link>
              </div>
              ):(
                <div className="topdrop">
              <div className="closedrop" onClick={closedrop}><MdOutlineClose /></div>
              <Link to='/' onClick={() => setMeueDisplay(false)}>Home</Link>
              <Link to='/personal' onClick={() => setMeueDisplay(false)}>Personal</Link>
              <Link to='/business' onClick={() => setMeueDisplay(false)}>Business</Link>
              <Link to='/rouces' onClick={() => setMeueDisplay(false)}>Resources</Link>
              <Link to='/about' onClick={() => setMeueDisplay(false)}>About</Link>
              <Link to='/contact' onClick={() => setMeueDisplay(false)}>Contact Us</Link>
              <Link onClick={() => setMeueDisplay(false)}>Help</Link>
              <Link to='/login' onClick={() => setMeueDisplay(false)}>Secure login</Link>
              <span style={{textAlign: 'center'}}>Routing number<br /> 267080355</span>
                </div>
              )}
            </div>
            )}

            
          <div className="downnav">
            <div className="menuw" onClick={toggleDisplay}><TiThMenu style={{fontSize: '30px', color: 'black'}} />

            </div>



            <div style={{cursor: 'pointer'}} className="left" onClick={() => window.location.href = '/'}><img src={logo} alt="logo" /></div>


            <div className="right">
              {isLogin ? (
              <div style={{display: 'flex', gap: '16px'}}>
              <Link onClick={() => window.location.href = '/'} style={{color: 'black'}}>Home</Link>
              <Link onClick={() => window.location.href = '/account/dashboard'}  style={{color: 'black'}}>Account</Link>
              

              
              </div>
              ):(
              <div style={{display: 'flex', gap: '16px'}}>
               <Link  onClick={() => window.location.href = '/personal'}  style={{color: 'black'}}>Personal</Link>
              <Link  onClick={() => window.location.href = '/business'}  style={{color: 'black'}}>Business</Link>
              <Link  onClick={() => window.location.href = '/rouces'}  style={{color: 'black'}}>Resources</Link>
              <Link  onClick={() => window.location.href = '/'} style={{color: 'black'}}>Insurance</Link>
              </div>
              )}



            </div>
          </div>
           </div>
        </Navbar>
    )
}

export default Nav