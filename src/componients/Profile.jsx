import React from 'react'
import {AccountProfile} from './styled'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <AccountProfile>
        <div className="profilewrapper">

        <div className="AcctInsured">
          <div style={{color: '#007cba'}}><h1><strong>FDIC</strong>  </h1></div>
          <div className='bar'><h1><span>|</span></h1></div>
          <div><h1><span style={{fontSize: '15px'}}>FDIC-Insured - Backed by the full faith and credit of the U.S. Government. Goldman Sachs Bank USA. Satt Lake City Branch.</span></h1></div>
        </div>
        <div className="basicinfo">
            <span>Basic Info</span>
        </div>

        <div className="table">
        <div>
        <p>Name</p>
        <span>Natanel Stone</span>
        </div>
        <div>
        <p>Email</p>
        <span>NatanelStone@gmail.com</span>
        </div>
        <div>
        <p>Phone</p>
        <span>783030838</span>
        </div>
        <div>
        <p>Street</p>
        <span>ave 43 ny</span>
        </div>
        <div>
        <p>APt/Suite</p>
        <span>43</span>
        </div>
        <div>
        <p>City</p>
        <span>NY</span>
        </div>
        <div>
        <p>State</p>
        <span>New York</span>
        </div>
        <div>
        <p>Zip Code</p>
        <span>23983</span>
        </div>

        <button>Edit</button>
        </div>


     <div className="bottonwrite">
        <p><strong>Jetstream Credit Union </strong>is a financial institution dedicated to providing loans, deposit products, and credit card services. All financial products and services are offered under the supervision of Jetstream Credit Union. Member FDIC. For more details, including redemption options, go to <span><Link>mygmrewardscard.com</Link></span>. © 2025 Jetstream Credit Union. All rights reserved.</p>
        <span><strong>NMLS ID:</strong> 208156. NMLS Consumer Access Website: <br /> <span><Link>www.nmlsconsumeraccess.org</Link></span></span>
     </div>

        </div>
    </AccountProfile>
  )
}

export default Profile
 