import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { Box } from '../components/ContactForm/ContactForm.styled';
import { useGetContactsQuery } from '../redux/contactsApiSlice';

export const PhoneBookPage = () => {

    const { data } = useGetContactsQuery();

    return (
        <Box>
            <h1>Name contacts</h1>          
            <ContactForm contacts={data} />         
            <h2>Contacts</h2>      
            {data && data.length >= 1 ? (
                <>              
                    <Filter />             
                    <ContactList contacts={data} />              
                </>             
            ) : (<h2>No contacts yet. Fill the fields to add some.</h2>                   
            )}            
        </Box>
    )
}