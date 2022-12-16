import { Formik } from "formik";
import {StyledForm, Label, Input, Button} from "../RegisterForm/RegisterForm.styled";

export const RegisterForm = () => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    const handleSubmit = () => {

    }

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
                    />                  
                </Label>
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
                <Button type="submit">Sign Up</Button>
            </StyledForm>
        </Formik>

    )
}