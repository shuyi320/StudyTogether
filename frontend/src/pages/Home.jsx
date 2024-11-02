// pages/Home.js
import React from 'react';

// Import Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'; // Renamed for clarity

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mt-8">Explore More</h2>
        {/* Add additional sections or components here */}
      </div>
    </>
  );
};

export default Home;
