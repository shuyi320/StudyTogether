// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

//Import assets
import Logo from '../assets/StudyTogetherIcon.png';

//Import Third Party
import { UserButton, useAuth } from '@clerk/clerk-react';


const Navbar = () => {
  const { isSignedIn, signOut } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <img src={Logo} alt="StudyTogether Logo" className="h-8 mr-2" />
          <Link to="/" className="text-white text-lg font-bold">Study Buddy</Link>
        </div>
        <div className="flex space-x-4">


          <Link to="/" className="text-white ">Study Sessions</Link>
          <Link to="/" className="text-white ">About Us</Link>

          {!isSignedIn ? (
            <>
              {/* NOT logged in*/}

              <Link to="/login" className="text-white">Login</Link>
              <Link to="/register" className="text-white">Register</Link>
            </>
          ) : (
            <>
              {/* You are able to see this after you're signed in*/}
              <Link to="/chat" className="text-white">Chat</Link>
              <Link to="/dashboard" className="text-white">Dashboard</Link>

              <UserButton />

            </>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
