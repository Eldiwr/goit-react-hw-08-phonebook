import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinks = styled(NavLink)`
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