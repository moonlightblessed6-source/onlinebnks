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
            <Link to='/'>Home</Link>
            <Link to='account'>Account</Link>
            <Link to='/account/transfer'>Transfer</Link>
            <Link to='/help'>Help</Link>
            <Link to='/account/profile'>Profile</Link>
        </div>
      </div>
    </Accountnavbar>
  )
}

export default AccountNav
