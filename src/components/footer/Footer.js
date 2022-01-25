import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import '../../scss/components/footer/Footer.scss';

function Footer() {
    return (
        <Navbar>
            <Nav className='container-fluid justify-content-center align-items-start footerContainer bg-light'>
                <div className='container row'>
                    <div className='col footerCol'>
                        <div className='row  form-label'>FOR YOU</div>
                        <div className='row'>WISH LIST</div>
                        <div className='row'>GIFT CARDS</div>
                        <div className='row'>AFTERPAY</div>
                        <div className='row'>CLOTHING REWARDS</div>
                        <div className='row'>STUDENT DISCOUNT</div>
                        <div className='row'>BLOG</div>
                        <div className='row'>GIVE US FEEDBACK</div>
                    </div>
                    <div className='col footerCol'>
                        <div className='row form-label'>GUEST SERVICES</div>
                        <div className='row'>ORDER STATUS</div>
                        <div className='row container-fluid'>RETURNS &#038; EXCHANGES</div>
                        <div className='row'>BILLING</div>
                        <div className='row'>SHIPPING</div>
                        <div className='row'>ORDER INFO</div>
                        <div className='row'>FAQS</div>
                        <div className='row'>CONTACT US</div>
                    </div>
                    <div className='col footerCol'>
                        <div className='row form-label'>COMPANY</div>
                        <div className='row'>ABOUT US</div>
                        <div className='row'>CAREERS</div>
                        <div className='row'>INVESTOR RELATIONS</div>
                        <div className='row'>TERMS OF USE</div>
                        <div className='row'>PRIVACY &#038; COOKIE POLICY</div>
                        <div className='row'>SITE MAP</div>
                        <div className='row'>TRENDING SEARCHES</div>
                    </div>
                    <div className='col footerCol'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>SIGN UP FOR EMAIL</Form.Label>
                                <Form.Control type="email" placeholder="Example@email.com" />
                                <Button variant='secondary' type='submit'>Submit</Button>
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>FIND A STORE</Form.Label>
                                <Form.Control type="email" placeholder="Zip Code" />
                                <Button variant='secondary' type='submit'>Submit</Button>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className='col footerCol'>
                        <div className='row form-label'>CONNECT WITH US</div>
                        <div className='row'>
                            <div className='iconContainer col-sm-1'>
                                <i className="fab fa-instagram"></i>
                            </div>
                            <div className='iconContainer col-sm-1'>
                                <i className="fab fa-facebook-f"></i>
                            </div>
                            <div className='iconContainer col-sm-1'>
                                <i className="fab fa-pinterest-p"></i>
                            </div>
                            <div className='iconContainer col-sm-1'>
                                <i className="fab fa-twitter"></i>
                            </div>
                            <div className='iconContainer col-sm-1'>
                                <i className="fab fa-youtube"></i>
                            </div>
                        </div>
                        <div className='row form-label'>HELP US IMPROVE</div>
                        <div className='row'>Take a quick survey about your site visit. <u>Begin Survey</u></div>
                    </div>
                </div>
            </Nav>
        </Navbar>
    );
}

export default Footer;


