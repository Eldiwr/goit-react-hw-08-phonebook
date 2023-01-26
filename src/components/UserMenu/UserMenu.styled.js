import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 20px;
`
export const Button = styled.button`
  width: 150px;
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 4px;
  outline: none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    color: orange;
  }
`;