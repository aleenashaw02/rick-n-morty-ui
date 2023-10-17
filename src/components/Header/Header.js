import React from 'react';
import { useAuth } from '../../service/AuthContext';
import './Header.css';

function Header() {
    const { isLoggedIn, logout } = useAuth();
  return (
    <header>
      <h1>RICK AND MORTY CHARACTERS</h1>
      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </header>
  );
}

export default Header;
