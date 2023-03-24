

import React, { useState } from 'react';
import { Container, Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className='header'>
      <Container>
        <Navbar expand="sm">
          <Link to="/">Get Trusted Online ID Here</Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">home</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact">contact us</Link>
              </NavItem>
              <NavItem>
                <Link to="/privacy-policy">privacy policy</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
