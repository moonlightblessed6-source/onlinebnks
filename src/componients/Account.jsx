// import {Accountpage} from './styled'
// import { CiCirclePlus } from "react-icons/ci";
// import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';



// const Account = () => {

//   const [balance, setBalance] = useState(null);
//   const [name, setName] = useState('');
//   const [currentTime, setCurrentTime] = useState('');

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const token = localStorage.getItem('authToken');  // or wherever you store your auth token

//         const response = await fetch('http://127.0.0.1:8000/api/account/dashboard', {
//           headers: {
//             'Authorization': `Token ${token}`
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch dashboard data');
//         }

//         const data = await response.json();
//         setBalance(data.balance);
//         setName(data.name);
//         setCurrentTime(new Date(data.current_time).toLocaleTimeString());
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDashboard();
//   }, []);

//   return (
//     <Accountpage>
//       <div className="accounwrapper">
//         <div className="accountname">
//           <span id='time'><strong>0.23</strong></span>
//           <h1><strong style={{color: '#007cba'}}>M:</strong></h1>
//           <p style={{fontSize: '20px'}} id='name' ><strong>Name:</strong> <span>Joe doe</span>  </p>
//         </div>
//         <div className="AcctInsured">
//           <div style={{color: '#007cba'}}><h1><strong><strong>FDIC</strong> <span>-Insured</span></strong> </h1></div>
//           <div className='bar'><h1><span>|</span></h1></div>
//           <div><h1><span style={{fontSize: '15px'}}>FDIC-Insured - Backed by the full faith and credit of the U.S. Government. Goldman Sachs Bank USA. Satt Lake City Branch.</span></h1></div>
//         </div>
//          <h2 style={{color: '#007cba'}}>Accounts</h2>
//         <div className="checking">
//           <p id='account_number'>Online Checking <span>- 2454</span></p>
//           <span id='balance'><strong style={{fontSize: '30px'}}>$0.00</strong></span>
//           <span>Current Balance</span>
//           <button>View Transaction History</button>
//         </div>

//        <div className="cds">
//         <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#1972c2', color: 'whitesmoke',cursor: 'pointer'}}>
//           <p>CDs with no withdrawal penalty</p>
//           <p>No-Penalty CDs</p>
//           <span><CiCirclePlus style={{fontSize: '30px'}}/></span>
//         </div>
//         <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#0f726c', color: 'whitesmoke', cursor: 'pointer'}}>
//           <p>Heard at Goldman Sachs</p>
//           <p>Voices & expertise</p>
//           <span><CiCirclePlus style={{fontSize: '30px'}}/></span>
//         </div>
//         <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#333232', color: 'whitesmoke',cursor: 'pointer'}}>
//           <p>Earn a cash bonus</p>
//           <p>Refer a friend</p>
//           <span><CiCirclePlus style={{fontSize: '30px'}} /></span>
//         </div>
//         <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#1972c2', color: 'whitesmoke',cursor: 'pointer'}}>
//           <p>Eplore savings options</p>
//           <p>Compare products and rates</p>
//           <span><CiCirclePlus style={{fontSize: '30px', cursor: 'pointer'}} /></span>
//         </div>
//        </div>

//        <div className="botton">
//         <p><strong>Jetstream Credit Union</strong> is a brand of Goldman Sachs Bank USA. All loans, deposit products and credit cards are provided or issued by Goldman Sachs Bank USA, Salt Lake City Branch. Member FDIC. GM is solely responsible for the operation and administration of the GM Card Earnings and points programs. For more details, including redemption options, go to <span><Link>mygmrewardscard.com</Link></span>. © 2025 The Goldman Sachs Group, Inc. All rights reserved.</p>
//         <p><strong>NMLS ID:</strong> 208156. <strong> NMLS Consumer Access Website:</strong></p>
//         <span><Link>www.nmlsconsumeraccess.org</Link></span>
//         <p><strong>Important information about procedures for opening a new account:</strong> To help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account.</p>
//         <p><strong>What this means for you:</strong> When you open an account, we will ask for your name, address, date of birth and other information that will allow us to identify you.</p>
//         <span>(Equal Housing Lender icon)<br /><strong>EQUAL HOUSING LENDER</strong></span>
//        </div>
//       </div>
//     </Accountpage>
//   )
// }

// export default Account




// import { Accountpage } from './styled';
// import { CiCirclePlus } from "react-icons/ci";
// import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';

// const Account = () => {
//   const [balance, setBalance] = useState(null);
//   const [name, setName] = useState('');
//   const [currentTime, setCurrentTime] = useState('');
//   const [accountNumber, setAccountNumber] = useState('');  // add state for account number

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const token = localStorage.getItem('authToken'); // your token key

//         if (!token) {
//           console.error('No auth token found');
//           return;
//         }

//         const response = await fetch('http://127.0.0.1:8000/api/account/dashboard', {
//           headers: {
//             'Authorization': `Token ${token}`
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch dashboard data');
//         }

//         const data = await response.json();

//         setBalance(data.balance);
//         setName(data.name);
//         setCurrentTime(new Date(data.current_time).toLocaleTimeString());
//         setAccountNumber(data.account_number);  // assuming your API returns this key
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchDashboard();
//   }, []);

//   return (
//     <Accountpage>
//       <div className="accounwrapper">
//         <div className="accountname">
//           {/* Show currentTime fetched from backend or fallback */}
//           <span id='time'><strong>{currentTime || '--:--'}</strong></span>

//           <h1><strong style={{color: '#007cba'}}>M:</strong></h1>

//           {/* Show full name fetched from backend or fallback */}
//           <p style={{fontSize: '20px'}} id='name' >
//             <strong>Name:</strong> <span>{name || 'Loading...'}</span>
//           </p>
//         </div>

//         <div className="AcctInsured">
//           <div style={{color: '#007cba'}}>
//             <h1><strong><strong>FDIC</strong> <span>-Insured</span></strong> </h1>
//           </div>
//           <div className='bar'><h1><span>|</span></h1></div>
//           <div>
//             <h1><span style={{fontSize: '15px'}}>
//               FDIC-Insured - Backed by the full faith and credit of the U.S. Government. Goldman Sachs Bank USA. Satt Lake City Branch.
//             </span></h1>
//           </div>
//         </div>

//         <h2 style={{color: '#007cba'}}>Accounts</h2>
//         <div className="checking">
//           {/* Show account number fetched from backend or fallback */}
//           <p id='account_number'>Online Checking <span>- {accountNumber || '----'}</span></p>

//           {/* Show balance fetched from backend or fallback */}
//           <span id='balance'>
//             <strong style={{fontSize: '30px'}}>
//               {/* ${balance !== null ? balance.toFixed(2) : '0.00'} */}
//               ${balance != null ? balance.toFixed(2) : '0.00'}

//             </strong>
//           </span>
//           <span>Current Balance</span>
//           <button>View Transaction History</button>
//         </div>

//         <div className="cds">
//           <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#1972c2', color: 'whitesmoke', cursor: 'pointer'}}>
//             <p>CDs with no withdrawal penalty</p>
//             <p>No-Penalty CDs</p>
//             <span><CiCirclePlus style={{fontSize: '30px'}}/></span>
//           </div>
//           <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#0f726c', color: 'whitesmoke', cursor: 'pointer'}}>
//             <p>Heard at Goldman Sachs</p>
//             <p>Voices & expertise</p>
//             <span><CiCirclePlus style={{fontSize: '30px'}}/></span>
//           </div>
//           <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#333232', color: 'whitesmoke', cursor: 'pointer'}}>
//             <p>Earn a cash bonus</p>
//             <p>Refer a friend</p>
//             <span><CiCirclePlus style={{fontSize: '30px'}} /></span>
//           </div>
//           <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#1972c2', color: 'whitesmoke', cursor: 'pointer'}}>
//             <p>Eplore savings options</p>
//             <p>Compare products and rates</p>
//             <span><CiCirclePlus style={{fontSize: '30px', cursor: 'pointer'}} /></span>
//           </div>
//         </div>

//         <div className="botton">
//           <p>
//             <strong>Jetstream Credit Union</strong> is a brand of Goldman Sachs Bank USA. All loans, deposit products and credit cards are provided or issued by Goldman Sachs Bank USA, Salt Lake City Branch. Member FDIC. GM is solely responsible for the operation and administration of the GM Card Earnings and points programs. For more details, including redemption options, go to <span><Link>mygmrewardscard.com</Link></span>. © 2025 The Goldman Sachs Group, Inc. All rights reserved.
//           </p>
//           <p><strong>NMLS ID:</strong> 208156. <strong> NMLS Consumer Access Website:</strong></p>
//           <span><Link>www.nmlsconsumeraccess.org</Link></span>
//           <p><strong>Important information about procedures for opening a new account:</strong> To help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account.</p>
//           <p><strong>What this means for you:</strong> When you open an account, we will ask for your name, address, date of birth and other information that will allow us to identify you.</p>
//           <span>(Equal Housing Lender icon)<br /><strong>EQUAL HOUSING LENDER</strong></span>
//         </div>
//       </div>
//     </Accountpage>
//   );
// };

// export default Account;

// import { Accountpage } from './styled';
// import { CiCirclePlus } from "react-icons/ci";
// import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';

// const Account = () => {
//   const [balance, setBalance] = useState(null);
//   const [name, setName] = useState('');
//   const [currentTime, setCurrentTime] = useState('');
//   const [accountNumber, setAccountNumber] = useState('');

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//           console.error('No auth token found');
//           return;
//         }

//         const response = await fetch('http://127.0.0.1:8000/api/account/dashboard', {
//           headers: {
//             'Authorization': `Token ${token}`
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch dashboard data');
//         }

//         const data = await response.json();
//         console.log('Dashboard API response:', data);  // Debug log

//         // Access nested account object and current_time
//         const account = data.account || {};

//         // Compose full name from first and last name
//         const fullName = `${account.first_name || ''} ${account.last_name || ''}`.trim();

//         setBalance(account.balance);
//         setName(fullName);
//         setAccountNumber(account.account_number);
//         setCurrentTime(new Date(data.current_time).toLocaleTimeString());
//       } catch (error) {
//         console.error('Error fetching dashboard:', error);
//       }
//     };

//     fetchDashboard();
//   }, []);

//   return (
//     <Accountpage>
//       <div className="accounwrapper">
//         <div className="accountname">
//           <span id='time'><strong>{currentTime || '--:--'}</strong></span>
//           <h1><strong style={{color: '#007cba'}}>M:</strong></h1>
//           <p style={{fontSize: '20px'}} id='name'>
//             <strong>Name:</strong> <span>{name || 'Loading...'}</span>
//           </p>
//         </div>

//         <div className="AcctInsured">
//           <div style={{color: '#007cba'}}>
//             <h1><strong><strong>FDIC</strong> <span>-Insured</span></strong> </h1>
//           </div>
//           <div className='bar'><h1><span>|</span></h1></div>
//           <div>
//             <h1><span style={{fontSize: '15px'}}>
//               FDIC-Insured - Backed by the full faith and credit of the U.S. Government. Goldman Sachs Bank USA. Satt Lake City Branch.
//             </span></h1>
//           </div>
//         </div>

//         <h2 style={{color: '#007cba'}}>Accounts</h2>
//         <div className="checking">
//           <p id='account_number'>Online Checking <span>- {accountNumber || '----'}</span></p>
//           <span id='balance'>
//             <strong style={{fontSize: '30px'}}>
//               ${balance != null ? balance.toFixed(2) : '0.00'}
//             </strong>
//           </span>
//           <span>Current Balance</span>
//           <button>View Transaction History</button>
//         </div>

//         <div className="cds">
//           <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#1972c2', color: 'whitesmoke',cursor: 'pointer'}}>
//             <p>CDs with no withdrawal penalty</p>
//             <p>No-Penalty CDs</p>
//             <span><CiCirclePlus style={{fontSize: '30px'}}/></span>
//           </div>
//           <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#0f726c', color: 'whitesmoke', cursor: 'pointer'}}>
//             <p>Heard at Goldman Sachs</p>
//             <p>Voices & expertise</p>
//             <span><CiCirclePlus style={{fontSize: '30px'}}/></span>
//           </div>
//           <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#333232', color: 'whitesmoke',cursor: 'pointer'}}>
//             <p>Earn a cash bonus</p>
//             <p>Refer a friend</p>
//             <span><CiCirclePlus style={{fontSize: '30px'}} /></span>
//           </div>
//           <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#1972c2', color: 'whitesmoke',cursor: 'pointer'}}>
//             <p>Eplore savings options</p>
//             <p>Compare products and rates</p>
//             <span><CiCirclePlus style={{fontSize: '30px', cursor: 'pointer'}} /></span>
//           </div>
//         </div>

//         <div className="botton">
//           <p>
//             <strong>Jetstream Credit Union</strong> is a brand of Goldman Sachs Bank USA. All loans, deposit products and credit cards are provided or issued by Goldman Sachs Bank USA, Salt Lake City Branch. Member FDIC. GM is solely responsible for the operation and administration of the GM Card Earnings and points programs. For more details, including redemption options, go to <span><Link>mygmrewardscard.com</Link></span>. © 2025 The Goldman Sachs Group, Inc. All rights reserved.
//           </p>
//           <p><strong>NMLS ID:</strong> 208156. <strong> NMLS Consumer Access Website:</strong></p>
//           <span><Link>www.nmlsconsumeraccess.org</Link></span>
//           <p><strong>Important information about procedures for opening a new account:</strong> To help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account.</p>
//           <p><strong>What this means for you:</strong> When you open an account, we will ask for your name, address, date of birth and other information that will allow us to identify you.</p>
//           <span>(Equal Housing Lender icon)<br /><strong>EQUAL HOUSING LENDER</strong></span>
//         </div>
//       </div>
//     </Accountpage>
//   );
// };

// export default Account;






// import { Accountpage } from './styled';
// import { CiCirclePlus } from "react-icons/ci";
// import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';

// const Account = () => {
//   const [balance, setBalance] = useState(null);
//   const [name, setName] = useState('');
//   const [currentTime, setCurrentTime] = useState('');
//   const [accountNumber, setAccountNumber] = useState('');

// useEffect(() => {
//   const fetchDashboard = async () => {
//     try {
//       const token = localStorage.getItem('authToken');
//       if (!token) {
//         console.error('No token found');
//         return;
//       }

//       const response = await fetch('http://127.0.0.1:8000/api/account/dashboard', {
//         headers: {
//           'Authorization': `Token ${token}`
//         }
//       });

//       if (!response.ok) throw new Error('Failed to fetch dashboard data');

//       const data = await response.json();

//       const account = data.account || {};
//       const fullName = `${account.first_name || ''} ${account.last_name || ''}`.trim();

//       setName(fullName);
//       setBalance(account.balance);
//       setAccountNumber(account.account_number);
//       setCurrentTime(new Date(data.current_time).toLocaleTimeString());
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchDashboard();
// }, []);


//   return (
//     <Accountpage>
//       <div className="accounwrapper">
//         <div className="accountname">
//           <span id='time'><strong>{currentTime || '--:--'}</strong></span>
//           <h1><strong style={{color: '#007cba'}}>M:</strong></h1>
//           <p style={{fontSize: '20px'}} id='name'>
//             <strong>Name:</strong> <span>{name || 'Loading...'}</span>
//           </p>
//         </div>

//         <div className="AcctInsured">
//           <div style={{color: '#007cba'}}>
//             <h1><strong><strong>FDIC</strong> <span>-Insured</span></strong></h1>
//           </div>
//           <div className='bar'><h1><span>|</span></h1></div>
//           <div>
//             <h1>
//               <span style={{fontSize: '15px'}}>
//                 FDIC-Insured - Backed by the full faith and credit of the U.S. Government. Goldman Sachs Bank USA. Satt Lake City Branch.
//               </span>
//             </h1>
//           </div>
//         </div>

//         <h2 style={{color: '#007cba'}}>Accounts</h2>
//         <div className="checking">
//           <p id='account_number'>Online Checking <span>- {accountNumber || '----'}</span></p>
//           <span id='balance'>
//             <strong style={{fontSize: '30px'}}>
//               ${balance != null ? balance.toFixed(2) : '0.00'}
//             </strong>
//           </span>
//           <span>Current Balance</span>
//           <button>View Transaction History</button>
//         </div>

//         <div className="cds">
//           <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#1972c2', color: 'whitesmoke', cursor: 'pointer'}}>
//             <p>CDs with no withdrawal penalty</p>
//             <p>No-Penalty CDs</p>
//             <span><CiCirclePlus style={{fontSize: '30px'}}/></span>
//           </div>
//           <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#0f726c', color: 'whitesmoke', cursor: 'pointer'}}>
//             <p>Heard at Goldman Sachs</p>
//             <p>Voices & expertise</p>
//             <span><CiCirclePlus style={{fontSize: '30px'}}/></span>
//           </div>
//           <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#333232', color: 'whitesmoke', cursor: 'pointer'}}>
//             <p>Earn a cash bonus</p>
//             <p>Refer a friend</p>
//             <span><CiCirclePlus style={{fontSize: '30px'}} /></span>
//           </div>
//           <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#1972c2', color: 'whitesmoke', cursor: 'pointer'}}>
//             <p>Explore savings options</p>
//             <p>Compare products and rates</p>
//             <span><CiCirclePlus style={{fontSize: '30px', cursor: 'pointer'}} /></span>
//           </div>
//         </div>

//         <div className="botton">
//           <p>
//             <strong>Jetstream Credit Union</strong> is a brand of Goldman Sachs Bank USA. All loans, deposit products and credit cards are provided or issued by Goldman Sachs Bank USA, Salt Lake City Branch. Member FDIC. GM is solely responsible for the operation and administration of the GM Card Earnings and points programs. For more details, including redemption options, go to <span><Link>mygmrewardscard.com</Link></span>. © 2025 The Goldman Sachs Group, Inc. All rights reserved.
//           </p>
//           <p><strong>NMLS ID:</strong> 208156. <strong> NMLS Consumer Access Website:</strong></p>
//           <span><Link>www.nmlsconsumeraccess.org</Link></span>
//           <p><strong>Important information about procedures for opening a new account:</strong> To help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account.</p>
//           <p><strong>What this means for you:</strong> When you open an account, we will ask for your name, address, date of birth and other information that will allow us to identify you.</p>
//           <span>(Equal Housing Lender icon)<br /><strong>EQUAL HOUSING LENDER</strong></span>
//         </div>
//       </div>
//     </Accountpage>
//   );
// };

// export default Account;




import { Accountpage } from './styled';
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Account = () => {
  const [balance, setBalance] = useState(null);
  const [name, setName] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          console.error('No auth token found');
          return;
        }

        const response = await fetch('http://127.0.0.1:8000/api/account/dashboard', {
          headers: {
            'Authorization': `Token ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }

        const data = await response.json();

        // Combine first and last name from the account object
        const firstName = data.account?.first_name || '';
        const lastName = data.account?.last_name || '';
        const fullName = `${firstName} ${lastName}`.trim();

        setName(fullName);
        setBalance(data.account?.balance);
        setAccountNumber(data.account?.account_number);
        setCurrentTime(new Date(data.current_time).toLocaleTimeString());
      } catch (error) {
        console.error(error);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <Accountpage>
      <div className="accounwrapper">
        <div className="accountname">
          <span id='time'><strong>{currentTime || '--:--'}</strong></span>
          <h1><strong style={{color: '#007cba'}}>M:</strong></h1>
          <p style={{fontSize: '20px'}} id='name' >
            <strong>Name:</strong> <span>{name || 'Loading...'}</span>
          </p>
        </div>

        <div className="AcctInsured">
          <div style={{color: '#007cba'}}>
            <h1><strong><strong>FDIC</strong> <span>-Insured</span></strong> </h1>
          </div>
          <div className='bar'><h1><span>|</span></h1></div>
          <div>
            <h1><span style={{fontSize: '15px'}}>
              FDIC-Insured - Backed by the full faith and credit of the U.S. Government. Goldman Sachs Bank USA. Satt Lake City Branch.
            </span></h1>
          </div>
        </div>

        <h2 style={{color: '#007cba'}}>Accounts</h2>
        <div className="checking">
          <p id='account_number'>Online Checking <span>- {accountNumber || '----'}</span></p>
          <span id='balance'>
            <strong style={{fontSize: '30px'}}>
              ${balance != null ? balance.toFixed(2) : '0.00'}
            </strong>
          </span>
          <span>Current Balance</span>
          <button>View Transaction History</button>
        </div>

        <div className="cds">
          <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#1972c2', color: 'whitesmoke', cursor: 'pointer'}}>
            <p>CDs with no withdrawal penalty</p>
            <p>No-Penalty CDs</p>
            <span><CiCirclePlus style={{fontSize: '30px'}}/></span>
          </div>
          <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#0f726c', color: 'whitesmoke', cursor: 'pointer'}}>
            <p>Heard at Goldman Sachs</p>
            <p>Voices & expertise</p>
            <span><CiCirclePlus style={{fontSize: '30px'}}/></span>
          </div>
          <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#333232', color: 'whitesmoke', cursor: 'pointer'}}>
            <p>Earn a cash bonus</p>
            <p>Refer a friend</p>
            <span><CiCirclePlus style={{fontSize: '30px'}} /></span>
          </div>
          <div style={{boxShadow: '2px 2px 4px', backgroundColor: '#1972c2', color: 'whitesmoke', cursor: 'pointer'}}>
            <p>Explore savings options</p>
            <p>Compare products and rates</p>
            <span><CiCirclePlus style={{fontSize: '30px', cursor: 'pointer'}} /></span>
          </div>
        </div>

        <div className="botton">
          <p>
            <strong>Jetstream Credit Union</strong> is a brand of Goldman Sachs Bank USA. All loans, deposit products and credit cards are provided or issued by Goldman Sachs Bank USA, Salt Lake City Branch. Member FDIC. GM is solely responsible for the operation and administration of the GM Card Earnings and points programs. For more details, including redemption options, go to <span><Link>mygmrewardscard.com</Link></span>. © 2025 The Goldman Sachs Group, Inc. All rights reserved.
          </p>
          <p><strong>NMLS ID:</strong> 208156. <strong> NMLS Consumer Access Website:</strong></p>
          <span><Link>www.nmlsconsumeraccess.org</Link></span>
          <p><strong>Important information about procedures for opening a new account:</strong> To help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account.</p>
          <p><strong>What this means for you:</strong> When you open an account, we will ask for your name, address, date of birth and other information that will allow us to identify you.</p>
          <span>(Equal Housing Lender icon)<br /><strong>EQUAL HOUSING LENDER</strong></span>
        </div>
      </div>
    </Accountpage>
  );
};

export default Account;
