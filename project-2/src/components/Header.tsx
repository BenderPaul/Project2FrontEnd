import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../assets/Logo.png";

//placeholder
export const Header: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="light" light>
        <NavbarBrand href="/" className="mr-auto">
          <img
            src={ logo }
            width="150"
            height="150"
            className="d-inline-block align-top"
            alt="Sticky-logo"
          />
        </NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/login">Log In</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/profile">My Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Register New User</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/logout">Log Out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
