/*
// export default Product;
const Product: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        {/* <img src={heroImage} alt="Nano Vision Systems" className="hero-image" /> }
        <h1>Our Product</h1>
        <p>
          Nano Vision Systems' product line includes advanced Nano Sensors and Night Vision Cameras, tailored for various applications.
        </p>
        <p>
          Our products deliver unmatched clarity and performance, setting a new standard in the industry.
        </p>
      </div>
    </section>
  );
};

export default Product;
*/

import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './About.css';

const Product: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/output_html/slide_6.html')  // Adjust the path accordingly
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
        
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </section>
  );
};

export default Product;