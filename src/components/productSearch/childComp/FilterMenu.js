import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import '../../../scss/components/productSearch/childComp/filterMenu.scss';

function FilterMenu() {
  return (
    <Nav className='d-flex flex-wrap justify-content-between my-5 filterMenu' variant="pills">
        <div>
            <Nav.Item>
                <Nav.Link disabled>
                    Men's Clothing
                </Nav.Link>
            </Nav.Item>
        </div>
        <div className='d-inline-flex flex-wrap align-items-center justify-content-center'>
            <span className='sortBy'>Sort By:</span>
            <NavDropdown title="Newest" id="nav-dropdown">
                <NavDropdown.Item>Recommended</NavDropdown.Item>
                <NavDropdown.Item>Newest</NavDropdown.Item>
                <NavDropdown.Item>Brand A - Z</NavDropdown.Item>
                <NavDropdown.Item>Price Low - High</NavDropdown.Item>
                <NavDropdown.Item>Price High - Low</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className='px-2'>
                <Nav.Link href="#/home" active>
                    Free Store Pickup 
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className='px-3'>
                <Nav.Link title="Item" active>
                    Same Day Delivery
                </Nav.Link>
            </Nav.Item>
        </div>
    </Nav>
  );
}

export default FilterMenu;