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
        <Formik
            initialValues={ initialValues }
            onSubmit = {handleSubmit}
        >
            <StyledForm>
                <Label>Name
                    <Input
                        type="text"
                        name="name"
                        required 
                    />                  
                </Label>
                <Label>Email
                    <Input
                        type="email"
                        name="email"
                        required 
                    />
                </Label>
                <Label>Password
                    <Input
                        type="password"
                        name="password"
                        required 
                    />
                </Label>
                <Button type="submit">Sign Up</Button>
            </StyledForm>
        </Formik>

    )
}