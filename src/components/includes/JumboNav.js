import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import '../../scss/components/includes/JumboNav.scss';

function JumboNav() {
    return (
        <>
        {/* TOP CAROUSEL NAVBAR ===================================== */}
            <Navbar bg="dark justify-content-center" expand="lg">
                <Carousel>
                    <Carousel.Item>
                        <p className='slideInfo'>Up to Extra 50% off CLEARANCE - New Styles Added</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p className='slideInfo'>Get it in 2-3 days with Economy Shipping to CA, AZ, NV</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p className='slideInfo'>$20 OFF $100 - USE CODE: HELLOWORLD</p>
                    </Carousel.Item>
                </Carousel>
            </Navbar>

        {/* MIDDLE NAVBAR =========================================== */}
            <Navbar className="col-xs-2 px-2 midNav">
                <Nav>
                    <Nav.Link href="#home" className='midNavLink  p-0'>FREE SHIPPING on orders over $49!</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#link" className='midNavLink secondNavLink p-0'>
                    <i className="fas fa-shopping-bag"></i>Curbside &amp; In Store Pick Up, Same Day Delivery and Afterpay Now Available
                    </Nav.Link>
                </Nav>
            </Navbar>

        {/* MAIN NAVBAR ============================================= */}
            <Navbar className="navColor" bg='med' expand='md'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className='col'>
                    <div className='row bg-light deskMenu gy-2'>
                        <Navbar.Brand className="col col-md-4 deskBrand" href={`/`}>
                                <div className='brandMain'>
                                    <h3>City Gear</h3>
                                </div>
                                <div className='brandSide'>
                                    <h6>Super</h6>
                                    <h6>City</h6>
                                </div>
                        </Navbar.Brand>
                        <Form className='jumboSearch col-md-4'>
                            <FormControl
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            />
                            <Button className='searchBtn'>
                                <i className="fas fa-search"></i>
                            </Button>
                        </Form>
                        <Nav className="userInfo col-md-4">
                            <Nav.Link href="#home">
                                <div className='userContainer'>
                                    <i className="far fa-user"></i>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <div className='bagContainer'>
                                    <i className="fas fa-shopping-bag"></i>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </div>
                    <div className='row collapseMenu'>
                        <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                            <Nav className="flex-wrap">
                                <Nav.Link href="#home">GIFTS</Nav.Link>
                                <Nav.Link href="#features">MEN</Nav.Link>
                                <Nav.Link href="#pricing">WOMEN</Nav.Link>
                                <Nav.Link href="#home">KIDS</Nav.Link>
                                <Nav.Link href="#features">JEANS</Nav.Link>
                                <Nav.Link href="#pricing">SHOES</Nav.Link>
                                <Nav.Link href="#features">ACCESSORIES</Nav.Link>
                                <Nav.Link href="#pricing">SNOW</Nav.Link>
                                <Nav.Link href="#pricing">SHOES</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </div>
            </Navbar>
        </>
    );
}

export default JumboNav;
