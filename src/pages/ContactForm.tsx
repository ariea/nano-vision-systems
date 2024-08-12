
import React, { useState } from 'react';
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the default styles

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState<string | undefined>(''); // Allow undefined for phone number
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contactData = { name, email, message, phone };
    
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
            Our Email: info@nano-vision.tech<br />
            {/* Our Phone: (123) 456-7890 */}
          </p>
          <br /> {/* Blank line */}
          <h2>
           Or leave your Contact Info here:
          </h2>
        {submitted ? (
          <p>Thank you for your message! We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name" style={{ marginRight: '25px'}}>Name</label>
              <input style={{  width: '170px' }}
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <label htmlFor="phone" style={{ marginRight: '23px' }}>Phone</label>
                <PhoneInput
                  id="phone"
                  international
                  defaultCountry="US"
                  value={phone}
                  onChange={(value) => setPhone(value ?? '')} // Handle undefined value
                  style={{ marginTop: '8px', width: '170px' }}
                  required
                />
            </div>
            <div>
              <label htmlFor="email" style={{ marginRight: '25px'}}>Email </label>
              <input style={{  width: '170px' }}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
            <label htmlFor="message" style={{ marginRight: '5px', verticalAlign: 'top' }}>Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3} // Set the number of rows to 5 (or any other number)
                  style={{ marginTop: '8px', verticalAlign: 'top' , width: '170px' }}
                  required
                />
            </div>
            <br /> {/* Blank line */}
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;

