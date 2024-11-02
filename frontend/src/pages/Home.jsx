// pages/Home.js

// Import Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <div className="container bg-gray mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mt-8">Explore More</h2>
        {/* Add additional sections or components here */}
      </div>
    </>
  );
};

export default Home;
