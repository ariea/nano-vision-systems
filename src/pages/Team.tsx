// import React from 'react';

// const Team: React.FC = () => {
//   return (
//     <div>
//       <h1>Our Team</h1>
//       <p>
//         Our team consists of experts in nanotechnology, optics, and electronics. We are passionate about pushing the boundaries of imaging technology.
//       </p>
//       <p>
//         Meet the people behind Nano Vision Systems, who are driving innovation and excellence.
//       </p>
//     </div>
//   );
// };

// export default Team;

const Team: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        {/* <img src={heroImage} alt="Nano Vision Systems" className="hero-image" /> */}
        <h1>About Us</h1>
        <p>
          Our team consists of experts in nanotechnology, optics, and electronics. We are passionate about pushing the boundaries of imaging technology.
        </p>
        <p>
          Meet the people behind Nano Vision Systems, who are driving innovation and excellence.
        </p>
      </div>
    </section>
  );
};

export default Team;