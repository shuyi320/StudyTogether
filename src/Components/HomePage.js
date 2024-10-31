import React from 'react';
import './HomePage.css';
import image1 from '../group.png'; // Adjust the path to your image
import image2 from '../zoom.png'; // Adjust the path to your image 
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="title">What is StudyTogether</h1>
      <section className="section">
        <div className="text">
          <h2>Study in an Online Room</h2>
          <p>Join our online study rooms to collaborate with peers and enhance your learning experience.</p>
          <Link to="/online-room">
            <button className="btn">Join Online Room</button>
          </Link>
        </div>
        <div className="image">
          <img src={image1} alt="Online Room" />
        </div>
      </section>
      <section className="section">
        <div className="image">
          <img src={image2} alt="In-Person Study" />
        </div>
        <div className="text">
          <h2>Study In-Person</h2>
          <p>Find study groups and meet in person to collaborate and study together.</p>
          <Link to="/in-person">
            <button className="btn">Find In-Person Groups</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;