import { Formik } from "formik";
import {StyledForm, Label, Input, Button} from "../LoginForm/LoginForm.styled";

export const LoginForm = () => {

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