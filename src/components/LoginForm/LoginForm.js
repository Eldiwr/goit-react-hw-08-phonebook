import { useDispatch } from 'react-redux';
import { Formik } from "formik";
import { logIn } from 'redux/auth/operations';
import { StyledForm, Label, Input, Button } from './LoginForm.styled';



export const LoginForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn({         
      email: values.email,   
      password: values.password,          
    }));      
    resetForm();    
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ email: '', password: '' }}>
      <StyledForm>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          required
          placeholder="Please enter your email"
        />
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          required
          placeholder="Please enter your password"
        />
        <Button type="submit">Log in</Button>
      </StyledForm>
    </Formik>
  ); 
}
    
