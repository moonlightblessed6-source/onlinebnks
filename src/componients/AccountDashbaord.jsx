import React, { useEffect, useState } from 'react';
import {DashbaordAcccount} from './styled'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { LiaHornbill } from "react-icons/lia";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineDashboard, MdManageAccounts, MdOutlineHistoryToggleOff } from "react-icons/md";
import { BiSupport, BiTransfer } from "react-icons/bi";
import { RiLuggageDepositFill } from "react-icons/ri";
import { IoIosSend, IoIosLogOut } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";












const AccountDashbaord = () => {


      // ✅ useState declarations (in order)
  const [currentTab, setCurrentTab] = useState('Dashboard');
  const [balance, setBalance] = useState(null);
  const [name, setName] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const [receiverAccount, setReceiverAccount] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverBank, setReceiverBank] = useState('');
  const [swiftCode, setSwiftCode] = useState('');
  const [purpose, setPurpose] = useState('');
  const [amount, setAmount] = useState('');
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [transferId, setTransferId] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  // ✅ Fetch dashboard + user data in ONE call
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) throw new Error('No auth token found');

        const res = await fetch('http://127.0.0.1:8000/api/account/dashboard', {
          headers: { Authorization: `Token ${token}` },
        });

        if (!res.ok) throw new Error('Failed to fetch dashboard data');

        const data = await res.json();
        const account = data.account;

        const firstName = account?.first_name || '';
        const lastName = account?.last_name || '';
        const fullName = `${firstName} ${lastName}`.trim();

        setName(fullName);
        setBalance(account?.balance);
        setAccountNumber(account?.account_number);
        setUserData(account);
        setCurrentTime(new Date(data.current_time).toLocaleTimeString());
      } catch (err) {
        console.error(err);
      }
    };

    fetchDashboard();
  }, []);

  // ✅ Fetch transaction history
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) throw new Error('No auth token found');

        const res = await fetch('http://127.0.0.1:8000/api/transactions/history/', {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) throw new Error('Failed to fetch transactions');

        const data = await res.json();
        setTransactions(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  // ✅ Transfer form submission
  const handleTransferSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const token = localStorage.getItem('authToken');
      if (!token) throw new Error('No auth token');

      const res = await fetch('http://127.0.0.1:8000/api/transfers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          receiver_account: receiverAccount,
          receiver_name: receiverName,
          receiver_bank: receiverBank,
          swift_code: swiftCode,
          purpose,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || 'Failed to create transfer');
      }

      const data = await res.json();
      setTransferId(data.transfer_id);
      setShowOtpModal(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ OTP submission
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const token = localStorage.getItem('authToken');
      if (!token) throw new Error('No auth token');

      const res = await fetch(`http://127.0.0.1:8000/api/transfers/${transferId}/verify/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({ code: otpCode }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || 'OTP verification failed');
      }

      alert('Transfer verified and completed!');
      setShowOtpModal(false);
      setOtpCode('');
      // navigate('/account'); // Uncomment if you're using routing
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Final render check
  if (!userData) {
    return <div>Loading...</div>;
  }


//   logout
  const handlelogout = () => {
    localStorage.removeItem('authToken')
     navigate('/login')
  }
 

  const depositcheck = () => {
    alert('visit any of our closet branch to deposit check')
  }





  return (
    <DashbaordAcccount>
      <div className="dashboardwrapper">

        <div className="leftSideBar">
            <div className='balance'>
            <span>AVAILABLE BALANCE</span>
            <span id='balance'>
            <strong style={{fontSize: '30px'}}>
              ${balance != null ? new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(balance) : '0.00'}

            </strong>
          </span>
          <span id='time'><strong>Current Time: {currentTime || '--:--'}</strong></span>
            
            <div className='btndv'>
              <Link onClick={() => setCurrentTab('transfermoney')}><button style={{backgroundColor: '#2c3ee8'}}><FaMoneyBillTransfer /> TRANSFER</button></Link>
              <Link><button style={{backgroundColor: '#d43438'}}><LiaHornbill /> PAY BILLS</button></Link>
            </div>
            </div>

            <div className='menus'>
              
              <div className='linkbtn'>
                <h6>MENU</h6>
               <Link onClick={() => setCurrentTab('Dashboard')}><button> <MdOutlineDashboard /> Dashboard</button></Link>
               <Link onClick={() => setCurrentTab('profile')}><button><MdManageAccounts /> My Account</button></Link>
              </div>
              <Link onClick={() => setCurrentTab('tractionhistoty')}><MdOutlineHistoryToggleOff /> Transaction History</Link>
              <Link onClick={() => setCurrentTab('transfermoney')}><IoIosSend /> Send Money</Link>
              <Link onClick={() => setCurrentTab('transfermoney')}><BiTransfer /> International Wire Transfer</Link>
              <Link onClick={depositcheck}><RiLuggageDepositFill /> Depoit Check</Link>
              <Link onClick={handlelogout}><IoIosLogOut /> Logout</Link>
              <Link to='/contact'><BiSupport /> Support</Link>
              <span>Routing number 267080355</span>
            </div>
        

        </div>

        <div className="rightInof">

            {currentTab === 'tractionhistoty'  && (
        <div className="tractionhistoty">
          <h2>Transaction History</h2>
          {loading ? (
            <p>Loading transactions...</p>
          ) : transactions.length === 0 ? (
            <p>No transactions found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Reference</th>
                  <th>Purpose</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(tx => (
                  <tr key={`${tx.transaction_type}-${tx.timestamp}`}>
                    <td style={{color: tx.transaction_type === 'credit' ? 'green' : 'red'}}>
                      {tx.transaction_type.toUpperCase()}
                    </td>
                    <td>{tx.description}</td>
                    <td>{tx.amount}</td>
                    <td>{tx.reference || '-'}</td>
                    <td>{tx.purpose || '-'}</td>
                    <td>{new Date(tx.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
            )}

            <div className="paybills">

            </div>

         {currentTab === 'Dashboard' && (
         <div className="Dashboard">
            <div className="headerss">
                <div className='welcomname'>
                    <span><strong>Welcome back:&nbsp;</strong> <strong>{name || 'Loading...'}</strong></span>
                    <span>At a glance summary of your account!</span>
                </div>
                <div className='atag'>
                   <Link style={{backgroundColor: '#353eff'}}>Deposit <FaLongArrowAltRight /></Link>
                   <Link style={{backgroundColor: '#39475e'}}>Transfer Fund <FaLongArrowAltRight /></Link>
                </div>
            </div>

            <div className="overviewaccounts">
              <div className="hessds">
                <span>Overview</span>
                <span>Checking Account</span>
              </div>
            </div>

            </div>
         )}


         {currentTab === 'profile' && (
        <div className="profilewrapper">

        <div className="basicinfo">
          <span>Basic Info</span>
        </div>

        <div className="table">
          <div>
            <p>Name</p>
            <span>{`${userData.first_name} ${userData.last_name}`}</span>
          </div>
          <div>
            <p>Email</p>
            <span>{userData.email}</span>
          </div>
          <div>
            <p>Phone</p>
            <span>{userData.phone}</span>
          </div>
          <div>
            <p>Street</p>
            <span>{userData.street}</span>
          </div>
          <div>
            <p>APt/Suite</p>
            <span>{userData.apt_suite}</span>
          </div>
          <div>
            <p>City</p>
            <span>{userData.city}</span>
          </div>
          <div>
            <p>State</p>
            <span>{userData.state}</span>
          </div>
          <div>
            <p>Zip Code</p>
            <span>{userData.zip_code}</span>
          </div>

          <button>Edit</button>
        </div>

      </div>
         )}


        {currentTab === 'transfermoney'  && (
                  <div className="profilewrapper">
                    <h3>Transfer</h3>
        
            
                    <div className="amounr">
                      <p><strong>Balance</strong></p>
                      <div className="amount">
                        <span><strong style={{ fontSize: '25px' }}>
                          {/* ${parseFloat(balance).toFixed(2)} */}
                                        ${balance != null 
              ? new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(balance) 
              : '0.00'}
                          </strong></span>
                      </div>
                    </div>
            
                    <form onSubmit={handleTransferSubmit}>
                      <div>
                        <label>From Account</label>
                        <input type="text" style={{backgroundColor: 'white', color: 'black'}} value={accountNumber} disabled />
                      </div>
                      <div>
                        <label>Receiver’s Account</label>
                        <input type="text" value={receiverAccount} onChange={(e) => setReceiverAccount(e.target.value)} required />
                      </div>
                      <div>
                        <label>Receiver’s Fullname</label>
                        <input type="text" value={receiverName} onChange={(e) => setReceiverName(e.target.value)} required />
                      </div>
                      <div>
                        <label>Receiver’s Bank</label>
                        <input type="text" value={receiverBank} onChange={(e) => setReceiverBank(e.target.value)} required />
                      </div>
                      <div>
                        <label>SWIFT code</label>
                        <input type="text" value={swiftCode} onChange={(e) => setSwiftCode(e.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="purpose">Purpose of transfer</label>
                        <input
                          type="text"
                          id="purpose"
                          placeholder="e.g., Rent, Tuition, Gift"
                          value={purpose}
                          onChange={(e) => setPurpose(e.target.value)}
                        />
                      </div>
                      <div>
                        <label>Amount to Transfer</label>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <button type="submit" disabled={loading}>
                          {loading ? 'Processing...' : 'Transfer'}
                        </button>
                      </div>
                      {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
            
                    {/* 🔐 OTP Modal */}
                    {showOtpModal && (
                      <div className="otp-modal" style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        textAlign: 'center',
                        background: 'white',
                        padding: '10px',
                        border: '1px solid #ccc',
                        transform: 'translate(-50%, -50%)',
                        width: '25%',
                        zIndex: 1000,
                      }}>
                        <h3>Enter OTP Code</h3>
                        <form onSubmit={handleOtpSubmit}>
                          <input
                            type="text"
                            value={otpCode}
                            onChange={(e) => setOtpCode(e.target.value)}
                            maxLength={6}
                            required
                            placeholder="6-digit code"
                            style={{ fontSize: '18px', padding: '8px', width: '100%'}}
                          />
                          <div style={{ marginTop: '10px', width: '100%', display: 'flex', flexDirection: 'colume', gap: '0.4rem' }}>
                            <button  type="submit" disabled={loading}>
                              {loading ? 'Verifying...' : 'Verify'}
                            </button>
                            <button  type="button" onClick={() => setShowOtpModal(false)} style={{ backgroundColor: 'red', width: '100%', border: '1px solid red'  }}>
                              Cancel
                            </button>
                          </div>
                          {error && <p style={{ color: 'red' }}>{error}</p>}
                        </form>
                      </div>
                    )}
            
  
                  </div>
        )}




            


        </div>

      </div>
    </DashbaordAcccount>
  )
}

export default AccountDashbaord
