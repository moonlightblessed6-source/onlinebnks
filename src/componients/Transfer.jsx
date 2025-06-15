import React, { useEffect, useState } from 'react';
import { TransferAccount } from './styled';
import { Link, useNavigate } from 'react-router-dom';


const Transfer = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [balance, setBalance] = useState(0.0);

  const [receiverAccount, setReceiverAccount] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverBank, setReceiverBank] = useState('');
  const [swiftCode, setSwiftCode] = useState('');
  const [purpose, setPurpose] = useState('');
  const [amount, setAmount] = useState('');

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [transferId, setTransferId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  

  // ✅ Fetch account data
  const fetchAccountData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) throw new Error('Auth token not found');

      const response = await fetch('https://web-production-3ff4.up.railway.app/api/account/dashboard', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch account data');

      const data = await response.json();
      const account = data.account;

      setAccountNumber(account.account_number || '');
      setBalance(account.balance || 0.0);
    } catch (error) {
      console.error('Error fetching account info:', error);
    }
  };

  // ⏳ Initial fetch
  useEffect(() => {
    fetchAccountData();
  }, []);

  // 🔁 Transfer form submit
  const handleTransferSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const token = localStorage.getItem('authToken');
      if (!token) throw new Error('No auth token');

      const response = await fetch('https://web-production-3ff4.up.railway.app/api/transfers/', {
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
          purpose: purpose,
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.detail || 'Failed to create transfer');
      }

      const data = await response.json();
      setTransferId(data.transfer_id);
      setShowOtpModal(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔐 OTP verification
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const token = localStorage.getItem('authToken');
      if (!token) throw new Error('No auth token');

      const response = await fetch(`https://web-production-3ff4.up.railway.app/api/transfers/${transferId}/verify/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({ code: otpCode }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.detail || 'OTP verification failed');
      }

      alert('Transfer verified and completed!');
      setShowOtpModal(false);
      setOtpCode('');
      await fetchAccountData(); // ✅ Refresh balance
      navigate('/account');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TransferAccount>
      <div className="profilewrapper">
        <h3>Transfer</h3>

        <div className="AcctInsured">
          <div style={{ color: '#007cba' }}><h1><strong>FDIC</strong></h1></div>
          <div className="bar"><h1><span>|</span></h1></div>
          <div>
            <h1>
              <span style={{ fontSize: '15px' }}>
                FDIC -Insured | FDIC-Insured - Backed by the full faith and credit of the U.S. Government. Jetstream FCU Bank USA.
              </span>
            </h1>
          </div>
        </div>

        <div className="amounr">
          <p><strong>Amount</strong></p>
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
            <input type="text" value={accountNumber} disabled />
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

        <div className="bottonwrite">
          <p>
            <strong>Jetstream Credit Union</strong> is a financial institution providing loans, deposit products, and credit card services. Member FDIC. See <Link>mygmrewardscard.com</Link>.
          </p>
          <span>
            <strong>NMLS ID:</strong> 208156 | <Link>www.nmlsconsumeraccess.org</Link>
          </span>
        </div>
      </div>
    </TransferAccount>
  );
};

export default Transfer;
