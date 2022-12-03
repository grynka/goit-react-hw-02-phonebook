import React, { Component } from "react";
import { nanoid } from 'nanoid';

export class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: ''
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({[name]: value})
    console.log(name, this.state[name])
  }

  handleContactsCreate = (event) => {
  event.preventDefault()
  this.setState({
    contacts: [...this.state.contacts,
      {name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    }],
  });
  }

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleContactsCreate}>
          <label>
            <p>Name</p>
            <input
              value={this.state.name}
              type="text"
              name="name"
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <p>Phone</p>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <p><button type="submit">Add contact</button></p>
        </form>
        <ul>Contacts
          {this.state.contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>{ name }: { number }</p>
            </li>
          ))}</ul>
      </>
    );
  }
};
