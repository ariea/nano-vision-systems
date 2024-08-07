// import React from 'react';

// const Product: React.FC = () => {
//   return (
//     <div>
//       <h1>Our Product</h1>
//       <p>
//         Nano Vision Systems' product line includes advanced Nano Sensors and Night Vision Cameras, tailored for various applications.
//       </p>
//       <p>
//         Our products deliver unmatched clarity and performance, setting a new standard in the industry.
//       </p>
//     </div>
//   );
// };

// export default Product;
const Product: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        {/* <img src={heroImage} alt="Nano Vision Systems" className="hero-image" /> */}
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