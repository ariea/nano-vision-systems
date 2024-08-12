/*
// ContactList.tsx
import React, { useEffect, useState } from 'react';

interface Contact {
  name: string;
  email: string;
  message: string;
  phone: string;
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    setContacts(storedContacts);
  }, []);
  const deleteContact = (index: number) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <section className="contact-list">
      <div className="container">
        <h1>Contact Messages</h1>
        {contacts.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          <ul>
            {contacts.map((contact, index) => (
              <li key={index}>
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Phone:</strong> {contact.phone}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Message:</strong> {contact.message}</p>
                <button onClick={() => deleteContact(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ContactList;

*/

import React, { useEffect, useState } from 'react';

interface Contact {
  name: string;
  email: string;
  message: string;
  phone: string;
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const correctPassword = 'Aq1Sw2de3!@'; // Set your password here

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    setContacts(storedContacts);
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const deleteContact = (index: number) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  if (!isAuthenticated) {
    return (
      <section className="password-protect">
        <div className="container">
          <h1>Enter Password to Access Contact Messages</h1>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-list">
      <div className="container">
        <h1>Contact Messages</h1>
        {contacts.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          <ul>
            {contacts.map((contact, index) => (
              <li key={index}>
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Phone:</strong> {contact.phone}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Message:</strong> {contact.message}</p>
                <button onClick={() => deleteContact(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ContactList;


