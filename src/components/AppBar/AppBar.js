import { Outlet } from "react-router-dom";
import { Header, NavContainer, NavLinks } from "./AppBar.styled";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import {selectIsLoggedIn} from "redux/selectors"
import { Suspense } from "react";

export const AppBar = () => {
    
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
      <>
        <Header>
          <NavContainer>
            <div>
              <NavLinks to={'/'} end>
                Home
              </NavLinks>
              {isLoggedIn && <NavLinks to={'/contacts'}>PhoneBook</NavLinks>}
            </div>

            <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
          </NavContainer>
        </Header>
        <Suspense>
          <main>
            <Outlet />
          </main>
        </Suspense>
      </>
    );
};
