import { Component } from 'react';
import { FormPhonebook } from './FormPhonebook/FormPhonebook';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };
  addContact = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };
  hendlerAdd = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };
  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <FormPhonebook onSubmit={this.addContact} />
        {this.state.contacts.length > 0 ? (
          <Filter
            value={this.state.filter}
            onChangeFilter={this.changeFilter}
          />
        ) : (
          <p>Your phonebook is empty. Add first contact!</p>
        )}
        <h2>Contacts</h2>
        {this.state.contacts.length > 0 && (
          <Contacts
            contacts={this.getVisibleContacts()}
            onRemoveContact={this.removeContact}
          />
        )}
      </div>
    );
  }
}
