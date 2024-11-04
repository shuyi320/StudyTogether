import { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from '@clerk/clerk-react';

// Component Imports
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// Pages Imports
import Home from "./pages/HomePage";
import Chat from "./pages/Chat";
import DashBoard from './pages/Dashboard';
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import StudySession from './pages/StudySession';
import EventList from './pages/EventList';
import EventCreationPage from './pages/EventCreationPage'
import AboutUsPage from './pages/AboutUsPage';

// ProtectedRoute
// Any route that is protected REQUIRES you to be signed in and can't be accessed without being signed in
const ProtectedRoute = ({ element }) => {
  const { isSignedIn } = useAuth();
  return isSignedIn ? element : <Navigate to="/login" />;
};

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect to home on root */}
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/StudySession" element={<StudySession />} />
        <Route path="/EventList" element={<EventList />} />
        <Route path="/EventCreationPage" element={<ProtectedRoute element={<EventCreationPage />} />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/chat" element={<ProtectedRoute element={<Chat />} />} /> {/* Protect this route */}
        <Route path="/dashboard" element={<ProtectedRoute element={<DashBoard />} />} /> {/* Protect this route */}
      </Routes>
    </>
  );
}

export default App;
