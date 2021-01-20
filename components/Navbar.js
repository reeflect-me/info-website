import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Link from "next/link";

export default function NavbarComponent() {
  const Logo = "/images/Logo.png";
  return (
    <div className="nav-stick">
      <Navbar>
        <NavbarBrand href="/" tag={Link} style={{ color: "black" }}>
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
            <NavLink href="/login" tag={Link} style={{ color: "black" }}>
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup" tag={Link} style={{ color: "black" }}>
              SignUp
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
