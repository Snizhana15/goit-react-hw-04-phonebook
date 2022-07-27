import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
export default ContactList;
