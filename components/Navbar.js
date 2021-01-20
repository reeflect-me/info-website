import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default function NavbarComponent() {
  const Logo = "/images/Logo.png";
  return (
    <div className="nav-stick">
      <Navbar>
        <NavbarBrand to="/" style={{ color: "black" }}>
          <img
            src={Logo}
            alt="logo"
            height="30"
            width="100"
            className="d-inline-block align-top ml-3"
          />
        </NavbarBrand>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink to="/login" style={{ color: "black" }}>
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signup" style={{ color: "black" }}>
              SignUp
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
