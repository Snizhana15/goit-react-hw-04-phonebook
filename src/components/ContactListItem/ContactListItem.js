import css from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.item} key={id}>
      <button
        className={css.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
      <p className={css.text}>
        {name}: <span>{number}</span>
      </p>
    </li>
  );
};

export default ContactListItem;
