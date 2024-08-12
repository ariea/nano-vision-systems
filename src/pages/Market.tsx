

// pages/About.tsx
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './About.css';
import Slide from '../components/Slide';

const Market: React.FC = () => {
  //const slideIds = [1, 2, 3]; // Adjust according to your slides
  const slideId1 = 8;
  const slideId2 = 9;
  const slideId3 = 10;
  const slideId4 = 11;
  return (
    <section className="about">
      <div className="container">
        {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
        <Slide slideId={slideId1} />
        {/* <Slide slideId={slideId2} /> */}
        <Slide slideId={slideId3} />
        {/* <Slide slideId={slideId4} /> */}
      </div>
    </section>
  );
};

export default Market;


