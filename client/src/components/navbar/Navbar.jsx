import React, { useContext } from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { AuthContent } from '../../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContent);
  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
            <span className="logo">mybooking</span>
          </Link>
            {user ? user.username : (<div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>)}
        </div>
    </div>
  )
}

export default Navbar;