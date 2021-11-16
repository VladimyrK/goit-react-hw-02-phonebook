import ContactListItem from '../ContactListItem/ContactListItem';
import './ContactList.module.css';

const ContactList = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, name }) => (
        <ContactListItem key={id} name={name} />
      ))}
    </ul>
  );
};

export default ContactList;
