import React from 'react';
import Layout from '../components/Layout';
import { getContactData } from '../utils/storage';
import './ContactList.css';

const ContactList: React.FC = () => {
  const contactData = getContactData();

  return (
    <Layout>
      <h1>Contact List</h1>
      <div className="contact-list">
        {contactData.length === 0 ? (
          <p>No contact data available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((contact:any, index:any) => (
                <tr key={index}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
};

export default ContactList;
