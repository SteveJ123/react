import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  return (
    <div className="text-right">
    <Navbar style={{width: '400px'}} className="text-center" bg="light" expand="lg">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <NavDropdown title="Academics" id="basic-nav-dropdown">
            <NavDropdown.Item className="option text-center" href="#action/3.1">CBSC Cirriculum</NavDropdown.Item>
            <NavDropdown.Item className="option text-center" href="#action/3.2">Teaching Methodology </NavDropdown.Item>
            <NavDropdown.Item className="option text-center" href="#action/3.3">Teacher Manuals</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#about-us">Admissions</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default Navigation;
