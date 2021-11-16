import React, { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, data],
      };
    });
  };

  render() {
    console.log(this.state.contacts);
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactList items={this.state.contacts} />
      </div>
    );
  }
}

export default App;
