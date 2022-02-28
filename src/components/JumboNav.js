import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import '../scss/components/JumboNav.scss';

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
                <Navbar.Brand className="col-md-4 jumboBrand" href="#home">
                    <div className='brandMain'>
                        <h3>City Gear</h3>
                    </div>
                    <div className='brandSide'>
                        <h6>Super</h6>
                        <h6>City</h6>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className='col'>

                        {/*========== ONLY SHOWS >= 768px ===============*/}
                        {/* SEE SCSS FILE FOR NOTES */}
                        <div className='row bg-light deskMenu gy-2'>
                            <Navbar.Brand className="col-md-4 deskBrand" href="#home">
                                <div className='brandMain'>
                                    <h3>City Gear</h3>
                                </div>
                                <div className='brandSide'>
                                    <h6>Super</h6>
                                    <h6>City</h6>
                                </div>
                            </Navbar.Brand>
                            <Form className={`jumboSearch col-md-4`}>
                                <FormControl
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                />
                                <Button className='searchBtn'>
                                    <i className="fas fa-search"></i>
                                </Button>
                            </Form>
                            <Nav className="justify-content-end col-md-3">
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
        </>
    );
}

export default JumboNav;
