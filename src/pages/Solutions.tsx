/*
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './About.css';

const Solutions: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/output_html/slide_5.html')  // Adjust the path accordingly
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

export default Solutions;
*/
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './About.css';
import Slide from '../components/Slide';

const Solutions: React.FC = () => {
  //const slideIds = [1, 2, 3]; // Adjust according to your slides
  const slideId1 = 5;
  
  return (
    <section className="about">
      <div className="container">
        {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
        <Slide slideId={slideId1} />
        
      </div>
    </section>
  );
};

export default Solutions;