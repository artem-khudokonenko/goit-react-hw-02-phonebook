import React from 'react';
import { List } from './Contacts.styled';


export const Contacts = ({ contacts, onRemoveContact }) => {
    return(
     <List>{contacts.map(contact => (
        <li key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <button
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </List>
  );}

