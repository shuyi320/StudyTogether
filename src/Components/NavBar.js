import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../logo.png';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  

  return (
    <>
      <nav className="navbar">
        <div className='navbar-container'>
          <img

            src={logo}
            alt="Study Together Logo"
            className="logo"
          />

          {/* Mobile responsive menu */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          
          {/* Navbar menu */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/recyclables" className="nav-links" onClick={closeMobileMenu}>
                In Person
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/compostables" className="nav-links" onClick={closeMobileMenu}>
                Online
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/landfill" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
