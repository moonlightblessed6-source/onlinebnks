// DashboardButton.jsx
import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";

const DashboardButton = ({ setCurrentTab, setMeueDrop, tab, children }) => {
  const handleClick = () => {
    setCurrentTab(tab || 'Dashboard'); // default to Dashboard
    setMeueDrop(false);
  };

  return (
    <button onClick={handleClick} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      {children}
    </button>
  );
};

export default DashboardButton;
