import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { ListItem, Button } from './ContactList.styled';

export const ContactListItem = ({ contact }) => {

    const dispatch = useDispatch();

    const { id, number, name } = contact;
    return (
        <>      
            <ListItem><span>{name}</span><span> {number}</span> <Button type="button" onClick={() => dispatch(removeContact(id))}>Delete</Button></ListItem>         
        </>             
    );
};
