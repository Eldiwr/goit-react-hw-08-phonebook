import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { Box } from '../components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';


export const PhoneBookPage = () => {
   
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);          

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Box>
            <h1>Name contacts</h1>          
            <ContactForm contacts={contacts} />         
            <h2>Contacts</h2>      
            {contacts && contacts.length >= 1 ? (
                <>              
                    <Filter />             
                    <ContactList contacts={contacts} />              
                </>             
            ) : (<h2>No contacts yet. Fill the fields to add some.</h2>                   
            )}            
        </Box>
    )
}