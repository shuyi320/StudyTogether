// pages/SignIn.js
import React from 'react';
import { SignIn as ClerkSignIn} from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ClerkSignIn />
    </div>
  );
};

export default SignInPage;
