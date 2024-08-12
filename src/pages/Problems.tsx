
/*
// export default Problems;
import React from 'react';
import Layout from '../components/Layout';
import './About.css';


const Problem: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        {/* <img src={heroImage} alt="Nano Vision Systems" className="hero-image" /> }
        <h1>Problems with Current Technologies</h1>
        <p>
          Existing infrared and thermal imaging systems are costly, bulky, and require high power consumption. They also struggle with low resolution and environmental impact.
        </p>
        <p>
          These limitations make it challenging for broader applications in both consumer and professional markets.
        </p>
      </div>
    </section>
  );
};

export default Problem;
*/
// pages/About.tsx
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './About.css';

const Problem: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [htmlContent2, setHtmlContent2] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/output_html/slide_3.html')  // Adjust the path accordingly
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

      fetch('/output_html/slide_4.html')  // Adjust the path accordingly
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        setHtmlContent2(data);
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
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <div dangerouslySetInnerHTML={{ __html: htmlContent2 }} />
      </div>
    </section>
  );
};

export default Problem;


