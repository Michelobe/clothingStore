import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../scss/components/JumboNav.scss';

function JumboNav() {
    return (
        <Navbar bg='med' expand='md'>
            <Navbar.Brand className="col-md-4 jumboBrand" href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className='col'>
                    <div className='row mobileMenu jumboSearch'>
                        <Navbar.Brand className="col-md-4" href="#home">React-Bootstrap</Navbar.Brand>
                        <Form className=" d-flex col-sm-12 col-md-4">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav className="me-auto justify-content-end col-md-3">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </div>
                    <div className='row bg-light mobileMenu'>
                        <Nav className="navCenter justify-content-center">
                            <Nav.Link href="#home">GIFTS</Nav.Link>
                            <Nav.Link href="#features">MEN</Nav.Link>
                            <Nav.Link href="#pricing">WOMEN</Nav.Link>
                            <Nav.Link href="#home">KIDS</Nav.Link>
                            <Nav.Link href="#features">JEANS</Nav.Link>
                            <Nav.Link href="#pricing">SHOES</Nav.Link>
                            <Nav.Link href="#home">BACKPACKS</Nav.Link>
                            <Nav.Link href="#features">ACCESSORIES</Nav.Link>
                            <Nav.Link href="#pricing">SNOW</Nav.Link>
                            <Nav.Link href="#pricing">SKATE</Nav.Link>
                            <Nav.Link href="#pricing">OUTDOOR</Nav.Link>
                            <Nav.Link href="#pricing">BRANDS</Nav.Link>
                            <Nav.Link href="#pricing">SALE</Nav.Link>
                        </Nav>
                    </div>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default JumboNav;
