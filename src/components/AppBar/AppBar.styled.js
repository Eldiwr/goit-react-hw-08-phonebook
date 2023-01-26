import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  box-shadow: 0px 8px 15px -5px rgba(34, 60, 80, 0.6);
`;

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

export const NavLinks= styled(NavLink)`
  font-weight: 500;
  font-size: 18px;
  margin-right: 25px;
  text-decoration: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: black;
  &.active{
    color: orange;
  };
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: black;
  }
`;
