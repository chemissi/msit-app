import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Logo from "./img/logo.png";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="">
          <img
            src={Logo}
            width="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Accueil">Accueil</Nav.Link>
            <Nav.Link href="/Prospect">Prospects</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">Profil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
