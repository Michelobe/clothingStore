import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import '../../../scss/components/includes/footer/footer.scss';

function Footer() {
    return (
        <Navbar className='paddingReset'>
            <Nav className='container-fluid justify-content-center align-items-start footerContainer bg-light'>
                <div className='container row'>
                    <div className='col footerCol'>
                        <div className='row footerHeader'>FOR YOU</div>
                        <div className='row footerOption'>WISH LIST</div>
                        <div className='row footerOption'>GIFT CARDS</div>
                        <div className='row footerOption'>AFTERPAY</div>
                        <div className='row footerOption'>CLOTHING REWARDS</div>
                        <div className='row footerOption'>STUDENT DISCOUNT</div>
                        <div className='row footerOption'>BLOG</div>
                        <div className='row footerOption'>GIVE US FEEDBACK</div>
                    </div>
                    <div className='col footerCol'>
                        <div className='row footerHeader'>GUEST SERVICES</div>
                        <div className='row footerOption'>ORDER STATUS</div>
                        <div className='row footerOption footerOption'>RETURNS &#038; EXCHANGES</div>
                        <div className='row footerOption'>BILLING</div>
                        <div className='row footerOption'>SHIPPING</div>
                        <div className='row footerOption'>ORDER INFO</div>
                        <div className='row footerOption'>FAQS</div>
                        <div className='row footerOption'>CONTACT US</div>
                    </div>
                    <div className='col'>
                        <div className='row footerHeader'>COMPANY</div>
                        <div className='row footerOption'>ABOUT US</div>
                        <div className='row footerOption'>CAREERS</div>
                        <div className='row footerOption'>INVESTOR RELATIONS</div>
                        <div className='row footerOption'>TERMS OF USE</div>
                        <div className='row footerOption'>PRIVACY &#038; COOKIE POLICY</div>
                        <div className='row footerOption'>SITE MAP</div>
                        <div className='row footerOption'>TRENDING SEARCHES</div>
                    </div>
                    <div className='col-4 col-xl-3 footerCol'>
                        <Form className='mb-4'>
                            <Form.Group className="mb-3 submitForm" controlId="formBasicEmail">
                                <Form.Label className='contactHeader'>SIGN UP FOR EMAIL</Form.Label>
                                <Form.Control className='formInput' type="email" placeholder="Example@email.com" />
                                <Button className='submitButton' variant='secondary' type='submit'><i className="fas fa-angle-right"></i></Button>
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group className="mb-3 submitForm" controlId="formBasicEmail">
                                <Form.Label className='contactHeader'>FIND A STORE</Form.Label>
                                <Form.Control className='formInput' type="email" placeholder="Zip Code" />
                                <Button className='submitButton' variant='secondary' type='submit'><i className="fas fa-angle-right"></i></Button>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className='col-3 footerCol'>
                        <div className='row form-label contactHeader'>CONNECT WITH US</div>
                        <div className='row mb-3'>
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
                        <div className='row form-label contactHeader'>HELP US IMPROVE</div>
                        <div className='row'>
                            <p>
                                Take a quick survey about your site visit. <u>Begin Survey</u>
                            </p>
                        </div>
                    </div>
                </div>
            </Nav>
        </Navbar>
    );
}

export default Footer;


