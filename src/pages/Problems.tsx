// import React from 'react';

// const Problems: React.FC = () => {
//   return (
//     <div>
//       <h1>Problems with Current Technologies</h1>
//       <p>
//         Existing infrared and thermal imaging systems are costly, bulky, and require high power consumption. They also struggle with low resolution and environmental impact.
//       </p>
//       <p>
//         These limitations make it challenging for broader applications in both consumer and professional markets.
//       </p>
//     </div>
//   );
// };

// export default Problems;
import React from 'react';
import Layout from '../components/Layout';
import './About.css';


const Problem: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        {/* <img src={heroImage} alt="Nano Vision Systems" className="hero-image" /> */}
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