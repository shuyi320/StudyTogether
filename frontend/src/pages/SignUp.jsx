// pages/SignUp.jsx
import React from 'react';
import { SignUp as ClerkSignUp } from '@clerk/clerk-react'; // Rename the import

const SignUp = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <ClerkSignUp /> 
    </div>
  );
};

export default SignUp;
