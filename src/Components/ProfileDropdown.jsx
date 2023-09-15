import React, { useState } from 'react';
import { createUseStyles } from "react-jss";
import User from './User';
import SignOut from './Authentication/SignOut';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownContent = isOpen ? (
    <div className="dropdown-content">
      <ul>
        <li>Profile</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  ) : null;

  // onClick = {handleMenu}
  return (
    <div className="profile-dropdown">
      <User
        alt="Profile"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Profile</li>
          <li><SignOut/></li>
        </ul>
      )}
    </div>
  );
};

const useStyles = createUseStyles({
  
  
})

export default ProfileDropdown;
