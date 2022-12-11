import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Box } from './ContactForm/ContactForm.styled';
import { useGetContactsQuery } from 'redux/contactsApiSlice';



export const App = () => {

  const { data } = useGetContactsQuery();
  
    return (
      <>
        <Box>
          <h1>Name contacts</h1>
          <ContactForm contacts={ data } />
          {data.length >= 1 ? (
            <>
              <h2>Contacts</h2>
              <Filter/>
              <ContactList contacts={ data }/>
            </>
          ) : (<h2>No contacts yet. Fill the fields to add some.</h2>
          )}
        </Box>
      </>     
    )
};