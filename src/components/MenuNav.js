import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../scss/components/MenuNav.scss';

function MenuNav() {
    return (
        <Navbar className='sticky-top menuNav' bg="light" variant="light">
            <Nav className="navCenter me-auto">
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
        </Navbar>
    );
}

export default MenuNav;

