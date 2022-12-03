import React from "react"
 
const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}{' '}
            <button onClick={() => onClick(id)}>delete</button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList