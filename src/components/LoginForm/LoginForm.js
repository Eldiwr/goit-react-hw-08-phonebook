import { useDispatch } from 'react-redux';
import { Formik } from "formik";
import { logIn } from 'redux/auth/operations';
import {StyledForm, Label, Input, Button} from "../LoginForm/LoginForm.styled";

export const LoginForm = () => {

    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        dispatch(logIn({
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
                <Label>Email
                    <Input
                        type="email"
                        name="email"
                    />
                </Label>
                <Label>Password
                    <Input
                        type="password"
                        name="password"
                    />
                </Label>
                <Button type="submit">Log in</Button>
            </StyledForm>
        </Formik>
        
    )
}