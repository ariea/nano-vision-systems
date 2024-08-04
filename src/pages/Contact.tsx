
// const Contact: React.FC = () => {
//   return (
//     <section className="about">
//       <div className="container">
//         {/* <img src={heroImage} alt="Nano Vision Systems" className="hero-image" /> */}
//         <h1>Contact Us</h1>
//         <p>
//           We would love to hear from you! Whether you're interested in our products, have questions, or want to collaborate, feel free to reach out.
//         </p>
//         <p>
//         Email: info@nanovisionsystems.com<br />
//         Phone: (123) 456-7890
//         </p>
//         <p>
//          Our team will get back to you as soon as possible.
//        </p>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// ContactForm.tsx
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contactData = { name, email, message };
    
    // Store the contact data (local storage for demo purposes)
    let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.push(contactData);
    localStorage.setItem('contacts', JSON.stringify(contacts));

    setSubmitted(true);
  };

  return (
    <section className="contact-form">
      <div className="container">
        <h1>Contact Us</h1>
          <p>
           We would love to hear from you! Whether you're interested in our products, have questions, or want to collaborate, feel free to reach out.
          </p>
          <p>
            Our Email: info@nanovisionsystems.com<br />
            Our Phone: (123) 456-7890
          </p>
          <h2>
           Or leave your Contact Info here:
          </h2>
        {submitted ? (
          <p>Thank you for your message! We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;

