// pages/About.tsx
import React from 'react';
import Layout from '../components/Layout';
import './About.css';

// const About: React.FC = () => {
//   return (
//     <Layout>
//       <h1>About Us</h1>
//       <p>
//         Nano Vision Systems is a pioneer in advanced imaging technologies, focusing on delivering high-resolution, low-cost, and eco-friendly solutions.
//       </p>
//       <p>
//         Our technology addresses the challenges faced by existing night vision and thermal imaging systems.
//       </p>
//     </Layout>
//   );
// };
const About: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        {/* <img src={heroImage} alt="Nano Vision Systems" className="hero-image" /> */}
        <h1>About Us</h1>
        <p>
          Nano Vision Systems is a pioneer in advanced imaging technologies, focusing on delivering high-resolution, low-cost, and eco-friendly solutions.
        </p>
        <p>
          Our technology addresses the challenges faced by existing night vision and thermal imaging systems.
        </p>
      </div>
    </section>
  );
};

export default About;

