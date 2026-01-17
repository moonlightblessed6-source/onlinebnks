import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loginaccount } from './styled';


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); //

    try {
      const response = await fetch('https://geochain.app/api/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Invalid credentials');
      }

      const data = await response.json();

      // Save token to localStorage (or context/state)
      localStorage.setItem('authToken', data.token);
    
      const userResponse = await fetch('https://geochain.app/api/api/account/dashboard', {
  headers: {
    'Authorization': `Token ${data.token}`,  // note: use 'Token' prefix, not 'Bearer', since your dashboard fetch uses 'Token'
  },
});

if (!userResponse.ok) {
  throw new Error('Failed to fetch user profile');
}

const userData = await userResponse.json();

const account = userData.account || {};
const firstName = account.first_name || '';
const lastName = account.last_name || '';

alert(`${firstName} ${lastName} welcome!`.trim());

navigate('/account/dashboard');
      // No need to reload, just navigate
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <Loginaccount>
      <form onSubmit={handleLogin}>
        <div><span>Secure Login</span></div>

        <div>
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            <span style={{cursor: 'pointer', color: 'blue'}}>Forgot Username/Password?</span>
          </div>
        </div>

        <div><button type="submit" disabled={loading}> {loading ? 'Logging in...' : 'Login'}
          </button></div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </Loginaccount>
  );
};

export default Login;
