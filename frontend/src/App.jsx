import { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

// Component Imports
import Navbar from './components/Navbar';

// Pages Imports
import Home from "./pages/Home"; // Ensure this component exists
import Chat from "./pages/Chat";
import SignInPage from "./pages/SignIn"; 
import SignUpPage from "./pages/SignUp"; 

function App() {
  const [greeting, setGreeting] = useState('Hello, Study Buddy :)');

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect to home on root */}
        <Route path="/home" element={<Home />} /> 
        <Route path="/register" element={<SignUpPage />} /> 
        <Route path="/login" element={<SignInPage />} /> 
        <Route path="/chat" element={<Chat />} /> 
        <Route path="*" element={<Navigate to="/home" />} /> {/* Redirect to home on 404 */}
      </Routes>
    </>
  );
}

export default App;
