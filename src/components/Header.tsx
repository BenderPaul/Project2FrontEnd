import React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../assets/Logo.png";

export const Header: React.FC = () => {

  return (
    <div className="navContainer">
      <Navbar color="light" light expand={true}>
        <NavbarBrand href="/" className="mr-auto">
          <img
            src={ logo }
            width="150"
            height="150"
            className="d-inline-block align-top"
            alt="Sticky-logo"
          />
        </NavbarBrand>


          <Nav navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/">Log In</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/profile">My Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/logout">Log Out</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
};
