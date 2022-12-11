import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0px;
    max-width: 500px;
`
export const ListItem = styled.li`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
`

export const Button = styled.button`
    background-color: white;
    border-radius: 4px;
    &:hover{
      background-color: violet;
    }
`
