import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { List} from "./ContactList.styled";
import { ContactListItem } from './ContactListItem';

export const ContactList = () => {

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

    return (
        <List>
            {visibleContacts.map((contact) => {
                return (
                    <ContactListItem key={contact.id} contact={contact}/>
                );   
            })}    
        </List>
    );
};
