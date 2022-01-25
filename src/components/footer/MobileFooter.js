import React from 'react';
import { Navbar, Nav, Accordion } from 'react-bootstrap';
import '../../scss/components/footer/MobileFooter.scss';

function MobileFooter() {
    return (
        <Navbar>
            <Nav className='container-fluid flex-column bg-light p-0'>
                <div className='row footerCol container mt-4 mb-4 justify-content-center'>
                    <div className='row form-label justify-content-center'>CONNECT WITH US</div>
                    <div className='row'>
                        <div className='iconContainer col'>
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className='iconContainer col mx-auto'>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='container accWidth bg-light' eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='container accWidth bg-light' eventKey="2">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className='row footerCol container justify-content-center'>
                    <div className='row form-label justify-content-center'>HELP US IMPROVE</div>
                    <div className='row justify-content-center'>Take a quick survey about your site visit. <u>Begin Survey</u></div>
                </div>
            </Nav>
        </Navbar>
    );
}

export default MobileFooter;
