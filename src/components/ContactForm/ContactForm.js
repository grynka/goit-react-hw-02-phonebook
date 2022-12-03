import React, { Component } from "react"
import { nanoid } from "nanoid";
import { Label } from "./ContactForm.styled";
import PropTypes from 'prop-types';

 
class Form extends Component {
    state = {
      name: '',
      number: '',
    };
    handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    console.log(name, this.state[name]);
  };

  handleContactsCreate = event => {
      event.preventDefault();
      this.props.onSubmit({
        name: this.state.name,
        number: this.state.number,
        id: nanoid(),
      });
    this.setState({
      name: "",
      number: ""
    }
        
      );
   
    }

    
    render() {
            const { name, number } = this.state;
          return (
            <form onSubmit={this.handleContactsCreate}>
              <Label>
                <p>Name</p>
                <input
                  value={name}
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </Label>
              <Label>
                <p>Phone</p>
                <input
                  type="tel"
                  name="number"
                  value={number}
                  onChange={this.handleChange}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </Label>
              <p>
                <button type="submit">Add contact</button>
              </p>
            </form>
          );
    }
  }

    export default Form