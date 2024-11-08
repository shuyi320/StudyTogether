// components/Navbar.js
import { Link } from 'react-router-dom';
import Logo from '../assets/StudyTogetherIcon.png';
import { UserButton, useAuth } from '@clerk/clerk-react';

const Navbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 z-50 fixed w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="StudyTogether Logo" className="h-8 mr-2" />
          <Link to="/" className="text-white text-lg font-bold">Study Buddy</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/sessions" className="text-white">Study Sessions</Link>
          <Link to="/aboutus" className="text-white">About Us</Link>

          {!isSignedIn ? (
            <>
              <Link to="/login" className="text-white">Login</Link>
              <Link to="/register" className="text-white">Register</Link>
            </>
          ) : (
            <>
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
