import { ListItem, Button } from './ContactList.styled';
import { useDeleteContactMutation } from 'redux/contactsApiSlice';

export const ContactListItem = ({ contact }) => {

    const [deleteContact] = useDeleteContactMutation();
    const { id, number, name } = contact;
    return (
        <>      
            <ListItem><span>{name}</span><span>{number}</span> <Button type="button" onClick={() => deleteContact(id)}>Delete</Button></ListItem>         
        </>             
    );
};
