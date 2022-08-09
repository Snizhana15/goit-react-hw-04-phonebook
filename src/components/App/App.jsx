import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { nanoid } from 'nanoid';
import css from './App.module.css';

const useLocalStorage = () => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts') ?? []);
  });
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

const App = () => {
  const [contacts, setContacts] = useLocalStorage();
  const [filter, setFilter] = useState('');
  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    findContact
      ? alert(`${name} is already in contact`)
      : setContacts(prevState => [contact, ...prevState]);
  };
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={css.preTitle}>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
