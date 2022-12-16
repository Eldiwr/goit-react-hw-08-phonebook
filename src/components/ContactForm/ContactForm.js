import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { StyledForm, Label, Button, Input } from './ContactForm.styled';

export const ContactForm = ({contacts}) => {
  
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };
   
  const handleSubmit = (values, { resetForm }) => {

    const name = values.name;

    const isAlreadyInContact = contacts.find(contact => contact.name === values.name.trim());

    if (isAlreadyInContact) {
      alert(`${name} is already in contacts !`);
      return;
    }
    dispatch(addContact(values));

    resetForm();
  };
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}>
      <StyledForm >
        <Label htmlFor="name">Name
          <Input
            type="text"
            name="name"
            id='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />    
        </Label>
        
        <Label htmlFor="number">Tel
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
            <Button type='submit'>Add contact</Button>
        </StyledForm>
    </Formik>            
  )          
}
