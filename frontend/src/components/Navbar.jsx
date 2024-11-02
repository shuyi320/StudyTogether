// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const Navbar = () => {
  const { isSignedIn, signOut } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">StudyTogether</Link>
        <div className="flex space-x-4">
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
          {isSignedIn && (
            <>
              <Link to="/chat" className="text-white">Chat</Link>
              <button onClick={signOut} className="text-white">Sign Out</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
