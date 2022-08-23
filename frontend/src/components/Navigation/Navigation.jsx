import React from 'react';
import style from './Navigation.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar className={style.bg} expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Apna Helper</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about-us">About</Nav.Link>
                        <Nav.Link href="/contact-us">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;