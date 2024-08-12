import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './About.css';
import Slide from '../components/Slide';

const Presentation: React.FC = () => {
  
  return (
    <section className="about">
      <div className="container">
        {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
        <Slide isFullPresentation={true} />
        
      </div>
    </section>
  );
};

export default Presentation;