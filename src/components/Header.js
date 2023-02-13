import React from "react";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container} from 'react-bootstrap';
import Logout from "./logout";
import UserHeader from "./userHeader";


export const Header = ()=> {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">ctrl-dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/"><Logout></Logout></Nav.Link>
          <Nav.Link href="https://mcgwtxktaxvhnisqaike.supabase.co/auth/v1/authorize?provider=github">Login/Register</Nav.Link>
            
          </Nav>
          <Nav>
               <h1><UserHeader></UserHeader></h1>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



