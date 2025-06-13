import React from 'react'
import {Accountpage} from './styled'
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Account = () => {
  return (
    <Accountpage>
      <div className="accounwrapper">
        <div className="accountname">
          <span><strong>02:20</strong></span>
          <h1><strong style={{color: '#007cba'}}>M:</strong></h1>
          <p style={{fontSize: '20px'}}><strong>Name:</strong> Nethanel Stone </p>
        </div>
        <div className="AcctInsured">
          <div style={{color: '#007cba'}}><h1><strong><strong>FDIC</strong> <span>-Insured</span></strong> </h1></div>
          <div className='bar'><h1><span>|</span></h1></div>
          <div><h1><span style={{fontSize: '15px'}}>FDIC-Insured - Backed by the full faith and credit of the U.S. Government. Goldman Sachs Bank USA. Satt Lake City Branch.</span></h1></div>
        </div>
         <h2 style={{color: '#007cba'}}>Accounts</h2>
        <div className="checking">
          <span>Online Checking - 2454</span>
          <span><strong style={{fontSize: '30px'}}>$0.00</strong></span>
          <span>Current Balance</span>
          <button>View Transaction History</button>
        </div>

       <div className="cds">
        <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#1972c2', color: 'whitesmoke',cursor: 'pointer'}}>
          <p>CDs with no withdrawal penalty</p>
          <p>No-Penalty CDs</p>
          <span><CiCirclePlus style={{fontSize: '30px'}}/></span>
        </div>
        <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#0f726c', color: 'whitesmoke', cursor: 'pointer'}}>
          <p>Heard at Goldman Sachs</p>
          <p>Voices & expertise</p>
          <span><CiCirclePlus style={{fontSize: '30px'}}/></span>
        </div>
        <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#333232', color: 'whitesmoke',cursor: 'pointer'}}>
          <p>Earn a cash bonus</p>
          <p>Refer a friend</p>
          <span><CiCirclePlus style={{fontSize: '30px'}} /></span>
        </div>
        <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#1972c2', color: 'whitesmoke',cursor: 'pointer'}}>
          <p>Eplore savings options</p>
          <p>Compare products and rates</p>
          <span><CiCirclePlus style={{fontSize: '30px', cursor: 'pointer'}} /></span>
        </div>
       </div>

       <div className="botton">
        <p><strong>Jetstream Credit Union</strong> is a brand of Goldman Sachs Bank USA. All loans, deposit products and credit cards are provided or issued by Goldman Sachs Bank USA, Salt Lake City Branch. Member FDIC. GM is solely responsible for the operation and administration of the GM Card Earnings and points programs. For more details, including redemption options, go to <span><Link>mygmrewardscard.com</Link></span>. © 2025 The Goldman Sachs Group, Inc. All rights reserved.</p>
        <p><strong>NMLS ID:</strong> 208156. <strong> NMLS Consumer Access Website:</strong></p>
        <span><Link>www.nmlsconsumeraccess.org</Link></span>
        <p><strong>Important information about procedures for opening a new account:</strong> To help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account.</p>
        <p><strong>What this means for you:</strong> When you open an account, we will ask for your name, address, date of birth and other information that will allow us to identify you.</p>
        <span>(Equal Housing Lender icon)<br /><strong>EQUAL HOUSING LENDER</strong></span>
       </div>
      </div>
    </Accountpage>
  )
}

export default Account
