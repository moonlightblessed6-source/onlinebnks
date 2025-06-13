import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/js_logo_placeholder.svg'
import {Accountnavbar} from './styled'

const AccountNav = () => {
  return (
    <Accountnavbar>
      <div className="accountNavWrapper">
        <div className="left"><img src={logo} alt="logo" /></div>

        <div className="rigt">
            <Link>Home</Link>
            <Link>Account</Link>
            <Link>Transfer</Link>
            <Link>Help</Link>
            <Link>Profile</Link>
        </div>
      </div>
    </Accountnavbar>
  )
}

export default AccountNav
