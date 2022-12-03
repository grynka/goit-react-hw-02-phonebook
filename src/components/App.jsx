import React, { Component } from "react";
import Filter from "./Filter/Filter";
import ContactForm from './ContactForm/ContactForm';
import ContactList from "./Contactlist/ContactList";


export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  formSubmitHandler = data => {
    console.log(data)
   this.setState({
     contacts: [
     ...this.state.contacts, data],
   });
    }
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };
  
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value })
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter))
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={filterContacts} onClick={this.deleteContact} />
      </>
    );
  }
};
