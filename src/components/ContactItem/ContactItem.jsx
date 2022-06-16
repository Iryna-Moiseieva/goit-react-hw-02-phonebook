import React from 'react';
import s from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li className={s['item']}>
      <p className={s['text']}>{name}</p>
      <p className={s['text']}>{number}</p>
      <button
        className={s['button']}
        type="button"
        id={id}
        onClick={event => {
          onDelete(event.target.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
