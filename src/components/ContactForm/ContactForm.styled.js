import styled from "styled-components";
import { Form, Field } from 'formik';

export const Box = styled.div`
   padding: 40px;
`
export const StyledForm = styled(Form)`
   display: flex;
   flex-direction: column;  
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    max-width: 200px;

    margin-top: 10px;
`
export const Input = styled(Field)`
   margin-top: 10px;
`

export const Button = styled.button`
   width: 100px;
   padding: 5px;
   margin-top: 10px;
   background-color: white;
   border-radius: 4px;
   &:hover{
      background-color: violet;
   }
`