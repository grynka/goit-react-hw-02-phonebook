 import React from "react"
 
const Filter = ({value, onChange}) => {
    return (
        <label><p>Find contacts by Name</p>
        <input
          type="text"
          name="find"
          value={value}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        /></label>
     )
 }
 
 export default Filter