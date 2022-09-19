import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Box } from './ContactForm/ContactForm.styled';

export const App = () => {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');



  // componentDidMount() {
  //   const savedContacts = localStorage.getItem("saved_contacts");
  //   const parsedContacts = JSON.parse(savedContacts);
  //   if (parsedContacts) {
  //     this.setState({contacts: parsedContacts})
  //   };
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem("saved_contacts", JSON.stringify(this.state.contacts));
  //   };
  //   console.log(this.state.contacts);
  // };

  const handleOnSubmit = (name, number) => {
    
    if (contacts.find(contact => contact.name === name.trim())) {
      alert(`${name} is already in contacts!`);
    } else if (name.length === 0) {
      alert(`${name} Fields must be filled!`);
      return;
    };

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [...prevState, contact]);
  };

  const onHandleFilterChange = (filter) => {
    setFilter(filter);
  };
  
  const filterContactList = () => {

    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const handleDeleteContact = (id) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  
    return (
      <>
        <Box>
          <h1>Name contacts</h1>

          <ContactForm onSubmit={handleOnSubmit} />
        
          <h2>Contacts</h2>

          <Filter filterValue={filter} onChange={ onHandleFilterChange } />

          <ContactList onFilter={filterContactList()} onDelete={handleDeleteContact}/>
        </Box>
      </>     
    )
};