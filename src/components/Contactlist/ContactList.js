import React from "react"
import { Button } from "./ContactList.styled";
 
const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}{' '}
            <Button onClick={() => onClick(id)}>delete</Button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList