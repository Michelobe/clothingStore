import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../scss/components/JumboNav.scss';

function JumboNav() {
    return (
        <Navbar bg='med' expand='md'>
            <Navbar.Brand className="col-md-4 col-lg-4" href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form className="mdNavSpace d-flex col-md-4 col-lg-6">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="mdNavSpace me-auto justify-content-end col-md-4 col-lg-6">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default JumboNav;
