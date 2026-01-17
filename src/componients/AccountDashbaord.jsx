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
import { FaCircle } from "react-icons/fa";
import AccountNav from './accountNav'
import cicerfoorer from '../assets/logo/footercicle.png'













const AccountDashbaord = () => {

const [currentTab, setCurrentTab] = useState(() => {
  return localStorage.getItem('currentTab') || 'Dashboard';
});

// useEffect(() => {
//   localStorage.setItem('currentTab', currentTab);
// }, [currentTab]);



useEffect(() => {
  sessionStorage.setItem('currentTab', currentTab);
}, [currentTab]);


      // ✅ useState declarations (in order)
  // const [currentTab, setCurrentTab] = useState('Dashboard');
  const [balance, setBalance] = useState(null);
  const [name, setName] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [currentDate, setCurrentDime] = useState('')
  const [transactions, setTransactions] = useState([]);
  const [ipAddress, setIpAddress] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countryName, setCountryName] = useState('');

  // menubar
 const [meuedrop, setMeueDrop] = useState(false);
 const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [receiverAccount, setReceiverAccount] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverBank, setReceiverBank] = useState('');
  const [swiftCode, setSwiftCode] = useState('');
  // const [ibanfild, setIbanFild] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [purpose, setPurpose] = useState('');
  const [amount, setAmount] = useState('');

  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postal, setPostal] = useState('');
  const [country, setCountry] = useState('');

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [transferId, setTransferId] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 




  // logout


  
  
  
            // ✅ Fetch transaction history
            useEffect(() => {
              const fetchTransactions = async () => {
                try {
                  const token = localStorage.getItem('authToken');
                  if (!token) throw new Error('No auth token found');
          
                  const res = await fetch('https://geochain.app/api/api/transactions/history/', {
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

  // set how to show
  useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  // ✅ Fetch dashboard + user data in ONE call
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) throw new Error('No auth token found');

        const res = await fetch('https://geochain.app/api/api/account/dashboard', {
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
        // setCurrentTime(new Date(data.current_time).toLocaleTimeString());
       const datetime = new Date(data.current_time);
       setCurrentTime(datetime.toLocaleTimeString());
       setCurrentDime(datetime.toLocaleDateString());
      } catch (err) {
        console.error(err);
      }
    };

    fetchDashboard();
  }, []);


// fatch ip and country flag
useEffect(() => {
  const fetchGeoData = async () => {
    try {
      const res = await fetch('https://api.db-ip.com/v2/free/self');
      const data = await res.json();
      setIpAddress(data.ipAddress);
      setCountryCode(data.countryCode);
      setCountryName(data.countryName);
    } catch (err) {
      console.error('Error fetching IP info:', err);
    }
  };

  fetchGeoData();
}, []);





  // ✅ Transfer form submission
  const handleTransferSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const token = localStorage.getItem('authToken');
      if (!token) throw new Error('No auth token');

      const res = await fetch('https://geochain.app/api/api/transfers/', {
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

      const res = await fetch(`https://geochain.app/api/api/transfers/${transferId}/verify/`, {
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

      alert('Success ✅! Your transfer is complete.');
      setShowOtpModal(false);
      setOtpCode('');
      window.location.reload();
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


  const billpayment = () => {
    alert('Please contact support to activate your bill payment service.')
  }

  


  const dropsidebar = () => {
    setMeueDrop(prev => !prev);
  }


  const contactreload = () => {
    window.location='/contact'
  }


  const help = () => {
    window.location = '/contact'
  }

const countries = [
  { code: 'AF', name: 'Afghanistan' },
  { code: 'AL', name: 'Albania' },
  { code: 'DZ', name: 'Algeria' },
  { code: 'AS', name: 'American Samoa' },
  { code: 'AD', name: 'Andorra' },
  { code: 'AO', name: 'Angola' },
  { code: 'AI', name: 'Anguilla' },
  { code: 'AQ', name: 'Antarctica' },
  { code: 'AG', name: 'Antigua and Barbuda' },
  { code: 'AR', name: 'Argentina' },
  { code: 'AM', name: 'Armenia' },
  { code: 'AW', name: 'Aruba' },
  { code: 'AU', name: 'Australia' },
  { code: 'AT', name: 'Austria' },
  { code: 'AZ', name: 'Azerbaijan' },
  { code: 'BS', name: 'Bahamas' },
  { code: 'BH', name: 'Bahrain' },
  { code: 'BD', name: 'Bangladesh' },
  { code: 'BB', name: 'Barbados' },
  { code: 'BY', name: 'Belarus' },
  { code: 'BE', name: 'Belgium' },
  { code: 'BZ', name: 'Belize' },
  { code: 'BJ', name: 'Benin' },
  { code: 'BM', name: 'Bermuda' },
  { code: 'BT', name: 'Bhutan' },
  { code: 'BO', name: 'Bolivia' },
  { code: 'BA', name: 'Bosnia and Herzegovina' },
  { code: 'BW', name: 'Botswana' },
  { code: 'BV', name: 'Bouvet Island' },
  { code: 'BR', name: 'Brazil' },
  { code: 'IO', name: 'British Indian Ocean Territory' },
  { code: 'BN', name: 'Brunei Darussalam' },
  { code: 'BG', name: 'Bulgaria' },
  { code: 'BF', name: 'Burkina Faso' },
  { code: 'BI', name: 'Burundi' },
  { code: 'KH', name: 'Cambodia' },
  { code: 'CM', name: 'Cameroon' },
  { code: 'CA', name: 'Canada' },
  { code: 'CV', name: 'Cape Verde' },
  { code: 'KY', name: 'Cayman Islands' },
  { code: 'CF', name: 'Central African Republic' },
  { code: 'TD', name: 'Chad' },
  { code: 'CL', name: 'Chile' },
  { code: 'CN', name: 'China' },
  { code: 'CX', name: 'Christmas Island' },
  { code: 'CC', name: 'Cocos (Keeling) Islands' },
  { code: 'CO', name: 'Colombia' },
  { code: 'KM', name: 'Comoros' },
  { code: 'CG', name: 'Congo' },
  { code: 'CD', name: 'Congo, the Democratic Republic of the' },
  { code: 'CK', name: 'Cook Islands' },
  { code: 'CR', name: 'Costa Rica' },
  { code: 'CI', name: "Côte d'Ivoire" },
  { code: 'HR', name: 'Croatia' },
  { code: 'CU', name: 'Cuba' },
  { code: 'CY', name: 'Cyprus' },
  { code: 'CZ', name: 'Czech Republic' },
  { code: 'DK', name: 'Denmark' },
  { code: 'DJ', name: 'Djibouti' },
  { code: 'DM', name: 'Dominica' },
  { code: 'DO', name: 'Dominican Republic' },
  { code: 'EC', name: 'Ecuador' },
  { code: 'EG', name: 'Egypt' },
  { code: 'SV', name: 'El Salvador' },
  { code: 'GQ', name: 'Equatorial Guinea' },
  { code: 'ER', name: 'Eritrea' },
  { code: 'EE', name: 'Estonia' },
  { code: 'ET', name: 'Ethiopia' },
  { code: 'FK', name: 'Falkland Islands (Malvinas)' },
  { code: 'FO', name: 'Faroe Islands' },
  { code: 'FJ', name: 'Fiji' },
  { code: 'FI', name: 'Finland' },
  { code: 'FR', name: 'France' },
  { code: 'GF', name: 'French Guiana' },
  { code: 'PF', name: 'French Polynesia' },
  { code: 'TF', name: 'French Southern Territories' },
  { code: 'GA', name: 'Gabon' },
  { code: 'GM', name: 'Gambia' },
  { code: 'GE', name: 'Georgia' },
  { code: 'DE', name: 'Germany' },
  { code: 'GH', name: 'Ghana' },
  { code: 'GI', name: 'Gibraltar' },
  { code: 'GR', name: 'Greece' },
  { code: 'GL', name: 'Greenland' },
  { code: 'GD', name: 'Grenada' },
  { code: 'GP', name: 'Guadeloupe' },
  { code: 'GU', name: 'Guam' },
  { code: 'GT', name: 'Guatemala' },
  { code: 'GG', name: 'Guernsey' },
  { code: 'GN', name: 'Guinea' },
  { code: 'GW', name: 'Guinea-Bissau' },
  { code: 'GY', name: 'Guyana' },
  { code: 'HT', name: 'Haiti' },
  { code: 'HM', name: 'Heard Island and McDonald Islands' },
  { code: 'VA', name: 'Holy See (Vatican City State)' },
  { code: 'HN', name: 'Honduras' },
  { code: 'HK', name: 'Hong Kong' },
  { code: 'HU', name: 'Hungary' },
  { code: 'IS', name: 'Iceland' },
  { code: 'IN', name: 'India' },
  { code: 'ID', name: 'Indonesia' },
  { code: 'IR', name: 'Iran, Islamic Republic of' },
  { code: 'IQ', name: 'Iraq' },
  { code: 'IE', name: 'Ireland' },
  { code: 'IM', name: 'Isle of Man' },
  { code: 'IL', name: 'Israel' },
  { code: 'IT', name: 'Italy' },
  { code: 'JM', name: 'Jamaica' },
  { code: 'JP', name: 'Japan' },
  { code: 'JE', name: 'Jersey' },
  { code: 'JO', name: 'Jordan' },
  { code: 'KZ', name: 'Kazakhstan' },
  { code: 'KE', name: 'Kenya' },
  { code: 'KI', name: 'Kiribati' },
  { code: 'KP', name: "Korea, Democratic People's Republic of" },
  { code: 'KR', name: 'Korea, Republic of' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'KG', name: 'Kyrgyzstan' },
  { code: 'LA', name: "Lao People's Democratic Republic" },
  { code: 'LV', name: 'Latvia' },
  { code: 'LB', name: 'Lebanon' },
  { code: 'LS', name: 'Lesotho' },
  { code: 'LR', name: 'Liberia' },
  { code: 'LY', name: 'Libya' },
  { code: 'LI', name: 'Liechtenstein' },
  { code: 'LT', name: 'Lithuania' },
  { code: 'LU', name: 'Luxembourg' },
  { code: 'MO', name: 'Macao' },
  { code: 'MG', name: 'Madagascar' },
  { code: 'MW', name: 'Malawi' },
  { code: 'MY', name: 'Malaysia' },
  { code: 'MV', name: 'Maldives' },
  { code: 'ML', name: 'Mali' },
  { code: 'MT', name: 'Malta' },
  { code: 'MH', name: 'Marshall Islands' },
  { code: 'MQ', name: 'Martinique' },
  { code: 'MR', name: 'Mauritania' },
  { code: 'MU', name: 'Mauritius' },
  { code: 'YT', name: 'Mayotte' },
  { code: 'MX', name: 'Mexico' },
  { code: 'FM', name: 'Micronesia, Federated States of' },
  { code: 'MD', name: 'Moldova, Republic of' },
  { code: 'MC', name: 'Monaco' },
  { code: 'MN', name: 'Mongolia' },
  { code: 'ME', name: 'Montenegro' },
  { code: 'MS', name: 'Montserrat' },
  { code: 'MA', name: 'Morocco' },
  { code: 'MZ', name: 'Mozambique' },
  { code: 'MM', name: 'Myanmar' },
  { code: 'NA', name: 'Namibia' },
  { code: 'NR', name: 'Nauru' },
  { code: 'NP', name: 'Nepal' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'NC', name: 'New Caledonia' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'NI', name: 'Nicaragua' },
  { code: 'NE', name: 'Niger' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'NU', name: 'Niue' },
  { code: 'NF', name: 'Norfolk Island' },
  { code: 'MP', name: 'Northern Mariana Islands' },
  { code: 'NO', name: 'Norway' },
  { code: 'OM', name: 'Oman' },
  { code: 'PK', name: 'Pakistan' },
  { code: 'PW', name: 'Palau' },
  { code: 'PS', name: 'Palestine, State of' },
  { code: 'PA', name: 'Panama' },
  { code: 'PG', name: 'Papua New Guinea' },
  { code: 'PY', name: 'Paraguay' },
  { code: 'PE', name: 'Peru' },
  { code: 'PH', name: 'Philippines' },
  { code: 'PN', name: 'Pitcairn' },
  { code: 'PL', name: 'Poland' },
  { code: 'PT', name: 'Portugal' },
  { code: 'PR', name: 'Puerto Rico' },
  { code: 'QA', name: 'Qatar' },
  { code: 'RE', name: 'Réunion' },
  { code: 'RO', name: 'Romania' },
  { code: 'RU', name: 'Russian Federation' },
  { code: 'RW', name: 'Rwanda' },
  { code: 'BL', name: 'Saint Barthélemy' },
  { code: 'SH', name: 'Saint Helena, Ascension and Tristan da Cunha' },
  { code: 'KN', name: 'Saint Kitts and Nevis' },
  { code: 'LC', name: 'Saint Lucia' },
  { code: 'MF', name: 'Saint Martin (French part)' },
  { code: 'PM', name: 'Saint Pierre and Miquelon' },
  { code: 'VC', name: 'Saint Vincent and the Grenadines' },
  { code: 'WS', name: 'Samoa' },
  { code: 'SM', name: 'San Marino' },
  { code: 'ST', name: 'Sao Tome and Principe' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'SN', name: 'Senegal' },
  { code: 'RS', name: 'Serbia' },
  { code: 'SC', name: 'Seychelles' },
  { code: 'SL', name: 'Sierra Leone' },
  { code: 'SG', name: 'Singapore' },
  { code: 'SX', name: 'Sint Maarten (Dutch part)' },
  { code: 'SK', name: 'Slovakia' },
  { code: 'SI', name: 'Slovenia' },
  { code: 'SB', name: 'Solomon Islands' },
  { code: 'SO', name: 'Somalia' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'GS', name: 'South Georgia and the South Sandwich Islands' },
  { code: 'SS', name: 'South Sudan' },
  { code: 'ES', name: 'Spain' },
  { code: 'LK', name: 'Sri Lanka' },
  { code: 'SD', name: 'Sudan' },
  { code: 'SR', name: 'Suriname' },
  { code: 'SJ', name: 'Svalbard and Jan Mayen' },
  { code: 'SZ', name: 'Swaziland' },
  { code: 'SE', name: 'Sweden' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'SY', name: 'Syrian Arab Republic' },
  { code: 'TW', name: 'Taiwan, Province of China' },
  { code: 'TJ', name: 'Tajikistan' },
  { code: 'TZ', name: 'Tanzania, United Republic of' },
  { code: 'TH', name: 'Thailand' },
  { code: 'TL', name: 'Timor-Leste' },
  { code: 'TG', name: 'Togo' },
  { code: 'TK', name: 'Tokelau' },
  { code: 'TO', name: 'Tonga' },
  { code: 'TT', name: 'Trinidad and Tobago' },
  { code: 'TN', name: 'Tunisia' },
  { code: 'TR', name: 'Turkey' },
  { code: 'TM', name: 'Turkmenistan' },
  { code: 'TC', name: 'Turks and Caicos Islands' },
  { code: 'TV', name: 'Tuvalu' },
  { code: 'UG', name: 'Uganda' },
  { code: 'UA', name: 'Ukraine' },
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'US', name: 'United States' },
  { code: 'UM', name: 'United States Minor Outlying Islands' },
  { code: 'UY', name: 'Uruguay' },
  { code: 'UZ', name: 'Uzbekistan' },
  { code: 'VU', name: 'Vanuatu' },
  { code: 'VE', name: 'Venezuela' },
  { code: 'VN', name: 'Vietnam' },
  { code: 'VG', name: 'Virgin Islands, British' },
  { code: 'VI', name: 'Virgin Islands, U.S.' },
  { code: 'WF', name: 'Wallis and Futuna' },
  { code: 'EH', name: 'Western Sahara' },
  { code: 'YE', name: 'Yemen' },
  { code: 'ZM', name: 'Zambia' },
  { code: 'ZW', name: 'Zimbabwe' }
];

  
  return (
    
    <DashbaordAcccount>
       <AccountNav dropsidebar={dropsidebar} />
      
      <div className="dashboardwrapper">
        
       {(windowWidth >= 1000 || meuedrop) && (
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
              <Link onClick={() => {setCurrentTab('transfermoney'); setMeueDrop(false);}}><button style={{backgroundColor: '#2c3ee8'}}><FaMoneyBillTransfer /> TRANSFER</button></Link>
              <Link onClick={() => { billpayment(); setMeueDrop(false); }}><button style={{backgroundColor: '#d43438'}}><LiaHornbill /> PAY BILLS</button></Link>
            </div>
            </div>

            <div className='menus'>
              
              <div className='linkbtn'>
                <h6>MENU</h6>
               <Link onClick={() => {setCurrentTab('Dashboard'); setMeueDrop(false);}}><button> <MdOutlineDashboard /> Dashboard</button></Link>
               <Link onClick={() => {setCurrentTab('profile'); setMeueDrop(false);}}><button><MdManageAccounts /> My Account</button></Link>
              </div>
              <Link onClick={() => {setCurrentTab('tractionhistoty');setMeueDrop(false);}}><MdOutlineHistoryToggleOff /> Transaction History</Link>
              <Link onClick={() => {setCurrentTab('transfermoney'); setMeueDrop(false);}}><IoIosSend /> Send Money</Link>
              <Link onClick={() => {setCurrentTab('Internationaltransfermoney'); setMeueDrop(false);}}><BiTransfer /> International Wire Transfer</Link>
              <Link onClick={depositcheck}><RiLuggageDepositFill /> Depoit Check</Link>
              <Link onClick={handlelogout}><IoIosLogOut /> Logout</Link>
              <Link to='/contact'><BiSupport /> Support</Link>
              <span>Routing number 267080355</span>
            </div>
        

        </div>
       )}

       


        <div className="rightInof">

         
        {currentTab === 'tractionhistoty' && (
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
            

         {currentTab === 'Dashboard' && (
         <div className="Dashboard">
            <div className="headerss">
                <div className='welcomname'>
                    <span><strong>Welcome back:&nbsp;</strong> <strong>{name || 'Loading...'}</strong></span>
                    <span>At a glance summary of your account!</span>
                </div>
                <div className='atag'>
                   <Link style={{backgroundColor: '#353eff'}} onClick={depositcheck}>Deposit <FaLongArrowAltRight /></Link>
                   <Link style={{backgroundColor: '#39475e'}} onClick={() => setCurrentTab('transfermoney')}>Transfer Fund <FaLongArrowAltRight /></Link>
                </div>
            </div>

            <div className="overviewaccoun">
              <div>
                
                <span style={{fontSize: '20px'}}>Overview</span>

               <div className="boxsz">
                <div className='seconbox'>
                  <div className='na'>NA</div>
                  
                  <div>
                  <span>Last Login</span><br />
                  <span> {currentDate}</span><br />
                  <span> {currentTime}</span>
                  </div>
                </div>

                <div className='seconbox'>
                 <span>Available balance</span>
                 <div style={{display: 'flex', flexDirection: 'column', fontSize: '30px'}} onClick={() => setCurrentTab('tractionhistoty')}>
                  <span className='usd'><strong>USD</strong></span>
                 <span className='balacs'><strong>$&nbsp;{balance != null ? new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(balance) : '0.00'}</strong></span>
                 </div>
                 <span><strong>{name}</strong></span>
                 <span>login ip address</span>
                 <span>{ipAddress} — {countryName}{' '}
                 <img src={`https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`} alt={countryName} style={{ marginLeft: '8px' }}/></span>
                 
                </div>

               </div>

              </div>


              <div className='secondboxcheck'>
                <div className='trs'><span style={{fontSize: '20px'}}>Checking Account</span> <span style={{color: '#224999', fontWeight: '900', fontSize: '15px', cursor: 'pointer'}} onClick={() => setCurrentTab('transfermoney')}>Transfer Funds</span></div>
                <div className="checkingbox" onClick={() => setCurrentTab('tractionhistoty')}>
                  <span> Checking&nbsp;&nbsp; {accountNumber}</span>
                  <span>$&nbsp;{balance != null ? new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(balance) : '0.00'}</span>
                </div>
                <div className='trs'><span style={{fontSize: '20px'}}>Loans and lines of credit</span> <span onClick={billpayment} style={{color: '#224999', fontWeight: '900',fontSize: '15px', cursor: 'pointer'}}>Pay bills</span></div>
                <div className="loadns">
                  <div>
                    <span>Business Support</span>
                    <span>+&nbsp;&nbsp;10,000 USD</span>
                  </div>
                  <div>
                  <span>FICO Credit Score</span>
                  <span>814&nbsp;&nbsp;<FaCircle  style={{color: 'green'}}/></span>
                  </div>
                </div>
              </div>

            </div>


             <div className="lastbutton">
               
               <div className='charts'>
                 <div className='flexthem'>
                  <div className='styhere'>
                  <span><strong>FIR/LWGWSVT8-0625</strong></span>
                 <span>{currentDate} {currentTime}</span>
                 <span style={{color: '#1b49c0', fontWeight: '900'}}>$592813 WIRE TRF to Account...3833</span>
                 </div>
                 <div className='styOne'>
                  <span>Amount</span>
                 <span style={{color: '#53ebc8', fontWeight: '700'}}>+781218.50 Credit</span>
                 <span style={{color: '#53ebc8', fontWeight: '700'}}>USD</span>
                 <span style={{color: '#53ebc8', fontWeight: '700'}}>Completed</span>
                 </div>
                 </div>

                 <div className='flexthem'>
                  <div className='styhere'>
                  <span><strong>FIR/J5AJGDLEJ-0625</strong></span>                
                 <span>{currentDate} {currentTime}</span>
                 <span style={{color: '#1b49c0', fontWeight: '900'}}>Funds Transfer Lerch B LLC to Account...9823</span>
                   
                  </div>
                   <div className='styOne'>
                    <span>Amount</span>
                    <span style={{color:'#f73b1a'}}>- 8900.00 Debit</span>
                 <span style={{color: '#f73b1a'}}>USD</span>
                 <span style={{color: '#53ebc8', fontWeight: '700'}}>Completed</span>
                   </div>
                 </div>
               </div>

            <div className="bittons">
                <div className='colorscircl'>
                <span><FaCircle style={{color: 'green'}}/> Credit</span>
              <span><FaCircle style={{color: 'red'}}/> Debit</span>
                </div>
              <div className='circles'>

              </div>
              
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
                        <label>Routing Number</label>
                        <input type="text" value={swiftCode} onChange={(e) => setSwiftCode(e.target.value)} />
                      </div>
                                <div>
            <label>Recipient Address</label>
            <input type="text" value={recipientAddress} onChange={(e) => setRecipientAddress(e.target.value)} />
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




        {currentTab === 'Internationaltransfermoney'  && (
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
                        <label>Beneficiary Account Number</label>
                        <input type="text" value={receiverAccount} onChange={(e) => setReceiverAccount(e.target.value)} required />
                      </div>
                      {/* <div>
                        <label>IBAN</label>
                     <input type="text" value={ibanfild} onChange={(e) => setIbanFild(e.target.value)}/>
                      </div> */}
                      <div>
                        <label>Beneficiary Name</label>
                        <input type="text" value={receiverName} onChange={(e) => setReceiverName(e.target.value)} required />
                      </div>
                      <div>
                        <label>Beneficiary Bank Name</label>
                        <input type="text" value={receiverBank} onChange={(e) => setReceiverBank(e.target.value)} required />
                      </div>
                      <div>
                        <label>SWIFT/BIC Code	</label>
                        <input type="text" value={swiftCode} onChange={(e) => setSwiftCode(e.target.value)} />
                      </div>
                      <div>
                      <label>Bank Address</label>
                      <input type="text" value={recipientAddress} onChange={(e) => setRecipientAddress(e.target.value)} />
                      </div>
                      <div>
                      <label>City</label>
                      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                      </div>
                      <div>
                      <label>State/Province</label>
                      <input type="text" value={province} onChange={(e) => setProvince(e.target.value)} />
                      </div>
                      <div>
                      <label>ZIP/Postal Code</label>
                      <input type="text" value={postal} onChange={(e) => setPostal(e.target.value)} />
                      </div>

                    <div>
                    <label htmlFor="country" style={{ marginRight: '8px', whiteSpace: 'nowrap' }}>Country:</label>
                    <select id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="">Select a country</option>{countries.map(({ code, name }) => (
                    <option key={code} value={code}>{name}</option>))}
                    </select>
                    </div>

                      <div>
                        <label htmlFor="purpose">Transfer Purpose / Reason</label>
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

       <div className="ffoters">
        <div className='firstfoot'>
          <div className='imageciver'><img src={cicerfoorer} alt="cicerfoorer" /></div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <h4>We're here to help you!</h4>
            <p>You can ask a question, file a support ticket, manage requests, or report an issue. Our support team will get back to you via email.</p>
          </div>
          <div  style={{display: 'flex', flexDirection: 'column'}}><button onClick={contactreload}>Get Support Now</button></div>
        </div>

        <div className="lstbnts">
          <span>&copy; 2025 Jetstream Federal Credit Union — All Rights Reserved</span>
          <div className='termslas'>
            <span >Terms</span>
            <span >Privacy</span>
            <span onClick={help}>Help</span>
          </div>

        </div>

        </div>


    </DashbaordAcccount>
  )
}

export default AccountDashbaord
