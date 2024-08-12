// pages/SlidesContainer.tsx
import React from 'react';
import Slide from '../components/Slide';
import './SlidesContainer.css'; // Styles for slides container

const SlidesContainer: React.FC = () => {
  const slideIds = [1, 2, 3]; // Adjust according to your slides

  return (
    <div className="slides-container">
      {slideIds.map(id => (
        <Slide key={id} slideId={id} />
      ))}
    </div>
  );
};

export default SlidesContainer;
