import React, { Component } from 'react';
import css from './ContactForm.module.css';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  handelChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={css.form} onSubmit={this.handelSubmit}>
        <label className={css.label}>
          <span className={css.label}>Name</span>
          <input
            className={css.input}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handelChange}
          />
        </label>
        <label>
          <span className={css.label}>Number</span>
          <input
            className={css.input}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handelChange}
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
