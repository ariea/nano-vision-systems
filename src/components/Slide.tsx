/*
// components/Slide.tsx
import React, { useEffect, useState } from 'react';
import './Slide.css'; // Scoped CSS for slides

interface SlideProps {
  slideId: number; // Slide index or ID
}

const Slide: React.FC<SlideProps> = ({ slideId }) => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/output_html/slide_${slideId}.html`) // Adjust the path accordingly
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
      });
  }, [slideId]);

  if (loading) {
    return <div>Loading slide...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="slide-container">
      <div className="slide-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Slide;
*/
// components/Slide.tsx
import React, { useEffect, useState } from 'react';
import './Slide.css'; // Scoped CSS for slides

interface SlideProps {
  slideId?: number; // Optional for when using the full presentation
  isFullPresentation?: boolean; // Flag to indicate loading full presentation
}

const Slide: React.FC<SlideProps> = ({ slideId, isFullPresentation = false }) => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let fetchPath: string;

    if (isFullPresentation) {
      fetchPath = '/output_html/full_presentation.html';
    } else if (slideId !== undefined) {
      fetchPath = `/output_html/slide_${slideId}.html`;
    } else {
      setError('No slide ID provided');
      setLoading(false);
      return;
    }

    fetch(fetchPath)
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
      });
  }, [slideId, isFullPresentation]);

  if (loading) {
    return <div className="slide-loading">Loading...</div>;
  }

  if (error) {
    return <div className="slide-error">Error: {error}</div>;
  }

  return (
    <div className="slide-container">
      <div className="slide-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Slide;


