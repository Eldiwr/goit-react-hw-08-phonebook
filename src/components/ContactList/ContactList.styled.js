import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0px;
    max-width: 500px;
`
export const ListItem = styled.li`
    display: flex;
    align-items: baseline;
    margin-top: 10px;
    justify-content: space-between;
`

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
