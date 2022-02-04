import React from 'react';
import { Navbar, Nav, Accordion } from 'react-bootstrap';
import '../../scss/components/footer/MobileFooter.scss';

function MobileFooter() {
    return (
        <Navbar>
            <Nav className='container-fluid flex-column bg-light p-0 mt-5'>
                <div className='row footerCol container mt-4 mb-4 justify-content-center'>
                    <div className='row form-label justify-content-center footerHeader'>CONNECT WITH US</div>
                    <div className='row justify-content-center'>
                        <div className='iconContainer col'>
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className='iconContainer col'>
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <div className='iconContainer col'>
                            <i className="fab fa-pinterest-p"></i>
                        </div>
                        <div className='iconContainer col'>
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className='iconContainer col'>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <Accordion className='w-100 mb-4 bg-light' defaultActiveKey="" flush='true'>
                    <Accordion.Item className='container accWidth bg-light' eventKey="0">
                        <Accordion.Header>FOR YOU</Accordion.Header>
                        <Accordion.Body>
                            <div className='row footerOption'>WISH LIST</div>
                            <div className='row footerOption'>GIFT CARDS</div>
                            <div className='row footerOption'>AFTERPAY</div>
                            <div className='row footerOption'>CLOTHING REWARDS</div>
                            <div className='row footerOption'>STUDENT DISCOUNT</div>
                            <div className='row footerOption'>BLOG</div>
                            <div className='row footerOption'>GIVE US FEEDBACK</div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='container accWidth bg-light' eventKey="1">
                        <Accordion.Header>GUEST SERVICES</Accordion.Header>
                        <Accordion.Body>
                            <div className='row footerOption'>ORDER STATUS</div>
                            <div className='row footerOption footerOption'>RETURNS &#038; EXCHANGES</div>
                            <div className='row footerOption'>BILLING</div>
                            <div className='row footerOption'>SHIPPING</div>
                            <div className='row footerOption'>ORDER INFO</div>
                            <div className='row footerOption'>FAQS</div>
                            <div className='row footerOption'>CONTACT US</div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='container accWidth bg-light' eventKey="2">
                        <Accordion.Header>COMPANY</Accordion.Header>
                        <Accordion.Body>
                            <div className='row footerOption'>ABOUT US</div>
                            <div className='row footerOption'>CAREERS</div>
                            <div className='row footerOption'>INVESTOR RELATIONS</div>
                            <div className='row footerOption'>TERMS OF USE</div>
                            <div className='row footerOption'>PRIVACY &#038; COOKIE POLICY</div>
                            <div className='row footerOption'>SITE MAP</div>
                            <div className='row footerOption'>TRENDING SEARCHES</div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className='row footerCol container justify-content-center'>
                    <div className='col'>
                        <div className='row form-label justify-content-center footerHeader'>HELP US IMPROVE</div>
                        <div className='row justify-content-center footerOption'>
                            <p>Take a quick survey about your site visit. <u>Begin Survey</u></p>
                        </div>
                    </div>
                </div>
            </Nav>
        </Navbar>
    );
}

export default MobileFooter;
