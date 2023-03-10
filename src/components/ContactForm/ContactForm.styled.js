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
  height: 35px;
  padding-left: 20px;
  margin-top: 10px;
  border: 1px solid gray;
  border-radius: 4px;
  outline: none;
`;

export const Button = styled.button`
  width: 150px;
  padding: 10px;
  margin-top: 20px;
  background-color: white;
  border: none;
  border-radius: 4px;
  outline: none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;