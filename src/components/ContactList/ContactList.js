import PropTypes from 'prop-types';

import ContactListItem from '../ContactListItem';
import './ContactList.module.css';

const ContactList = ({ items, onDeleteContact }) => {
  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.protTypes = {
  items: PropTypes.objectOf(PropTypes.string),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
