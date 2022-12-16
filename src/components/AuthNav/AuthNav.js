import {NavLinks} from '../AuthNav/AuthNav.styled'

export const AuthNav = () => {
  return (
    <div>
      <NavLinks to="/register">
        Register
      </NavLinks>
      <NavLinks to="/login">
        Log In
      </NavLinks>
    </div>
  );
};