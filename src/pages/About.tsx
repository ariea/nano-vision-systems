/*
// pages/About.tsx
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './About.css';

const About: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/output_html/slide_2.html')  // Adjust the path accordingly
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        setHtmlContent(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the HTML file:', error);
        setError(error.message);
        setLoading(false);
        console.log("loading",loading);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="about">
      <div className="container">
        {/* <h1>About Us</h1>
        <p>
          Nano Vision Systems is a pioneer in advanced imaging technologies, focusing on delivering high-resolution, low-cost, and eco-friendly solutions.
        </p>
        <p>
          Our technology addresses the challenges faced by existing night vision and thermal imaging systems.
        </p> }
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </section>
  );
};

export default About;
*/
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './About.css';
import Slide from '../components/Slide';

const About: React.FC = () => {
  //const slideIds = [1, 2, 3]; // Adjust according to your slides
  const slideId = 2;
  
  return (
    <section className="about">
      <div className="container">
        {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
        <Slide slideId={slideId} />
        
      </div>
    </section>
  );
};

export default About;


