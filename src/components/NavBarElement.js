import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


const NavBarElement = () => {
    return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/Home">Home</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/VideoEditor">비디오 편집</Nav.Link>
                <Nav.Link href="/logins">로그인</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}

export default NavBarElement;