import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Box } from './ContactForm/ContactForm.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const App = () => {

  const contacts = useSelector(selectContacts);
  console.log(contacts)
  
    return (
      <>
        <Box>
          <h1>Name contacts</h1>
          <ContactForm />
          {contacts ? (
            <>
              <h2>Contacts</h2>
              <Filter/>
              <ContactList/>
            </>
          ) : (<h2>No contacts yet. Fill the fields to add some.</h2>
          )}
        </Box>
      </>     
    )
};