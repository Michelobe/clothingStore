import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../scss/components/JumboNav.scss';

function JumboNav() {
    return (
        <Navbar className="navColor" bg='med' expand='md'>
            <Navbar.Brand className="col-md-4 jumboBrand" href="#home">
                <img src={require('./Michelobe-logos_transparent.png')} 
                     alt="michelobe logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className='col'>

                    {/*========== ONLY SHOWS >= 768px ===============*/}
                    {/* SEE SCSS FILE FOR NOTES */}
                    <div className='row bg-light deskMenu gy-2'>
                        <Navbar.Brand className="col-md-4 deskBrand" href="#home">
                            <img src={require('./Michelobe-logos_transparent.png')} 
                                 alt="michelobe logo" />
                        </Navbar.Brand>
                        <Form className={`jumboSearch col-md-4`}>
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button className='searchBtn'>
                                <i className="fas fa-search"></i>
                            </Button>
                        </Form>
                        <Nav className="justify-content-end col-md-3">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </div>
                    {/*========== ONLY SHOWS >= 768px ===============*/}

                    <div className='row mobileMenu'>
                        <Nav className="navCenter justify-content-center flex-wrap">
                            <Nav.Link href="#home">GIFTS</Nav.Link>
                            <Nav.Link href="#features">MEN</Nav.Link>
                            <Nav.Link href="#pricing">WOMEN</Nav.Link>
                            <Nav.Link href="#home">KIDS</Nav.Link>
                            <Nav.Link href="#features">JEANS</Nav.Link>
                            <Nav.Link href="#pricing">SHOES</Nav.Link>
                            <Nav.Link href="#features">ACCESSORIES</Nav.Link>
                            <Nav.Link href="#pricing">SNOW</Nav.Link>
                            <Nav.Link href="#pricing">SHOES</Nav.Link>
                            <Nav.Link href="#features">ACCESSORIES</Nav.Link>
                            <Nav.Link href="#pricing">SNOW</Nav.Link>
                        </Nav>
                    </div>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default JumboNav;
