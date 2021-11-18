import PropTypes from 'prop-types';

import './ContactListItem.module.css';

function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactListItem;
