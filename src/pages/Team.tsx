/*
const Team: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        {/* <img src={heroImage} alt="Nano Vision Systems" className="hero-image" /> }
        <h1>About Us</h1>
        <p>
          Our team consists of experts in nanotechnology, optics, and electronics. We are passionate about pushing the boundaries of imaging technology.
        </p>
        <p>
          Meet the people behind Nano Vision Systems, who are driving innovation and excellence.
        </p>
      </div>
    </section>
  );
};

export default Team;
*/
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './About.css';
import Slide from '../components/Slide';

const Team: React.FC = () => {
  //const slideIds = [1, 2, 3]; // Adjust according to your slides
  const slideId1 = 18;
  
  return (
    <section className="about">
      <div className="container">
        {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
        <Slide slideId={slideId1} />
        
      </div>
    </section>
  );
};

export default Team;