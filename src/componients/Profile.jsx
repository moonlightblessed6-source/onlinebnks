import React, { useState, useEffect } from 'react';
import { AccountProfile } from './styled';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          console.error('No auth token found');
          return;
        }

        const response = await fetch('http://127.0.0.1:8000/api/account/dashboard', {
          headers: { 'Authorization': `Token ${token}` },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserData(data.account);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <AccountProfile>
      <div className="profilewrapper">
        <div className="AcctInsured">
          <div style={{ color: '#007cba' }}>
            <h1>
              <strong>FDIC</strong>
            </h1>
          </div>
          <div className="bar">
            <h1>
              <span>|</span>
            </h1>
          </div>
          <div>
            <h1>
              <span style={{ fontSize: '15px' }}>
                FDIC-Insured - Backed by the full faith and credit of the U.S. Government. Goldman Sachs Bank USA. Salt Lake City Branch.
              </span>
            </h1>
          </div>
        </div>
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
    </AccountProfile>
  );
};

export default Profile;
