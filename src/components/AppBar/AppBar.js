import { Outlet } from "react-router-dom";
import { Header, NavContainer, NavLinks } from "./AppBar.styled";

export const AppBar = () => {

    return (
        <>
            <Header>
                <NavContainer>
                    <div>
                        <NavLinks to={"/"} end>Home</NavLinks>
                        <NavLinks to={"/contacts"}>PhoneBook</NavLinks>
                    </div>

                    <div>
                        <NavLinks to={"/register"}>Register</NavLinks>
                        <NavLinks to={"/login"}>Login</NavLinks> 
                    </div>                
                </NavContainer>
            </Header>
            <Outlet/>
        </>
        
    );
};
