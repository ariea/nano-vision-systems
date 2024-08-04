// import React from 'react';
// //import './Home.css';
// import './About.css';

// import heroImage from 'path_to_hero_image.jpg'; // Replace with actual path

// const Home: React.FC = () => {
//   return (
//     <section className="home">
//       <div className="container">
//         {/* <img src={heroImage} alt="Nano Vision Systems" className="hero-image" /> */}
//         <h1>Welcome to Nano Vision Systems</h1>
//         <p>
//           Our mission is to revolutionize the infrared and thermal imaging industry with our innovative Nano Sensor and Night Vision Cameras.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Home;
// pages/About.tsx
import React from 'react';
import Layout from '../components/Layout';
import './About.css';


const Home: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        {/* <img src={heroImage} alt="Nano Vision Systems" className="hero-image" /> */}
        <h1>Welcome to Nano Vision Systems</h1>
        <p>
        Our mission is to revolutionize the infrared and thermal imaging industry with our innovative Nano Sensor and Night Vision Cameras.
        </p>
        {/* <p>
          Our technology addresses the challenges faced by existing night vision and thermal imaging systems.
        </p> */}
      </div>
    </section>
  );
};

export default Home;

