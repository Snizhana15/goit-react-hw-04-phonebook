import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <div className={css.filter}>
      <label>
        <span className={css.text}>Find contacts by name</span>
        <input
          className={css.input}
          type="text"
          value={filter}
          name="filter"
          onChange={onChange}
        />
      </label>
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
