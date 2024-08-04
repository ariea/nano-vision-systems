// import React from 'react';
// import Layout from '../components/Layout';
// import { getContactData } from '../utils/storage';
// import './ContactList.css';

// const ContactList: React.FC = () => {
//   const contactData = getContactData();

//   return (
//     <Layout>
//       <h1>Contact List</h1>
//       <div className="contact-list">
//         {contactData.length === 0 ? (
//           <p>No contact data available.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Message</th>
//               </tr>
//             </thead>
//             <tbody>
//               {contactData.map((contact:any, index:any) => (
//                 <tr key={index}>
//                   <td>{contact.name}</td>
//                   <td>{contact.email}</td>
//                   <td>{contact.message}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default ContactList;
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

