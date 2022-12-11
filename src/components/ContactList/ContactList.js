import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { List} from "./ContactList.styled";
import { ContactListItem } from './ContactListItem';

export const ContactList = ({contacts}) => {

    const filter = useSelector(selectFilter);

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

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
