import { ListItem, Button } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactListItem = ({ contact }) => {

    const dispatch = useDispatch();

    const { id, number, name } = contact;

    return (
        <>      
            <ListItem><span>{name}</span><span>{number}</span> <Button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Button></ListItem>         
        </>             
    );
};
