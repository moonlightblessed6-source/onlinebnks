import React, {useState,useEffect} from 'react'
import logos from '../assets/logo/logos.png'
import {Accountnavbar} from './styled'
import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';



const AccountNav = ({dropsidebar }) => {

  const [name, setName] = useState('');


  useEffect(() => {
      const fetchDashboard = async () => {
        try {
          const token = localStorage.getItem('authToken');
          if (!token) {
            console.error('No auth token found');
            return;
          }
  
          const response = await fetch('https://web-production-3ff4.up.railway.app/api/account/dashboard', {
            headers: {
              'Authorization': `Token ${token}`
            }
          });
  
          if (!response.ok) {
            throw new Error('Failed to fetch dashboard data');
          }
  
          const data = await response.json();
  
          const firstName = data.account?.first_name || '';
          const lastName = data.account?.last_name || '';
          const fullName = `${firstName} ${lastName}`.trim();
  
          setName(fullName);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchDashboard();
    }, []);


   

  return (
    
    <Accountnavbar>
      
      <div className="accountNavWrapper">
        <div className="left"><img src={logos} alt="logo" /></div>
            <div onClick={dropsidebar} className='menubardrop'>
      <GiHamburgerMenu style={{ color: '#fff', fontSize: '24px' }} />
    </div>

        <div className="rigt">
         
            <a style={{fontSize: '20px', color: 'white'}} id='name'>
            <strong></strong> <span> {name || 'Loading...'} <MdAccountCircle style={{fontSize: '27px'}} /></span>
          </a>
        </div>
      </div>
    </Accountnavbar>
  )
}

export default AccountNav
