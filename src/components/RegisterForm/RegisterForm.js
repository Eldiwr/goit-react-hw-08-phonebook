import { Formik } from "formik";
import { useDispatch } from 'react-redux';
import { register } from "redux/auth/operations";
import {StyledForm, Label, Input, Button} from "../RegisterForm/RegisterForm.styled";

export const RegisterForm = () => {

    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        dispatch(register({
            name: values.name,
            email: values.email,
            password: values.password,
        }));
        resetForm();
    };

    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <StyledForm>
          <Label>
            Name
            <Input
              placeholder="Please enter your name"
              type="text"
              name="name"
              required
            />
          </Label>
          <Label>
            Email
            <Input
              placeholder="Please enter your email"
              type="email"
              name="email"
              required
            />
          </Label>
          <Label>
            Password
            <Input
              placeholder="Please create your password"
              type="password"
              name="password"
              pattern="(?=.*\d)(?=.*[a-z]).{10,}"
              title="Must contain at least one number and one lowercase letter, and at least 8 or more characters"
              required
            />
          </Label>
          <Button type="submit">Sign Up</Button>
        </StyledForm>
      </Formik>
    );
}