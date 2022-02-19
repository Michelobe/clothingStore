import React from 'react';
import { Nav, NavDropdown, OverlayTrigger, Popover, Button, Modal, Accordion, Form } from 'react-bootstrap';
import '../../../scss/components/productSearch/childComp/filterMenu.scss';

function FilterMenu() {
    const [filterShow, setFilterShow] = React.useState(false);
    const [pickupShow, setPickupShow] = React.useState(false);
    const [deliveryShow, setDeliveryShow] = React.useState(false);

    // CHANGE STYLING UPON SCROLL ===================================================
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("filterMenu").style.padding = ".5rem 0";
        } else {
        }
    }

    // FILTER MODAL
    function FilterModal(props) {
        return (
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Close
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Accordion className='sticky-top sideMenu' 
                            defaultActiveKey="0"
                            flush>
                        {/* ================================================================= */}
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Category</Accordion.Header>
                            <Accordion.Body className='firstChild'>Sweatshirts</Accordion.Body>
                            <Accordion.Body>Crew Neck</Accordion.Body>
                            <Accordion.Body>Hoodie</Accordion.Body>
                            <Accordion.Body>Zip Up</Accordion.Body>
                            <Accordion.Body>Basic</Accordion.Body>
                        </Accordion.Item>
                        {/* ================================================================= */}
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Brand</Accordion.Header>
                            <Accordion.Body className='firstChild'>
                                <Form>
                                    <Form.Group controlId='formBasicCheckbox'>
                                        <Form.Check type='checkbox' label='ADIDAS' />
                                    </Form.Group>
                                </Form>
                            </Accordion.Body>
                            <Accordion.Body>
                                <Form>
                                    <Form.Group controlId='formBasicCheckbox'>
                                        <Form.Check type='checkbox' label='VANS' />
                                    </Form.Group>
                                </Form>
                            </Accordion.Body>
                            <Accordion.Body>
                                <Form>
                                    <Form.Group controlId='formBasicCheckbox'>
                                        <Form.Check type='checkbox' label='SANTA CRUZ' />
                                    </Form.Group>
                                </Form>
                            </Accordion.Body>
                            <Accordion.Body>
                                <Form>
                                    <Form.Group controlId='formBasicCheckbox'>
                                        <Form.Check type='checkbox' label='BILLABONG' />
                                    </Form.Group>
                                </Form>
                            </Accordion.Body>
                            <Accordion.Body>
                                <Form>
                                    <Form.Group controlId='formBasicCheckbox'>
                                        <Form.Check type='checkbox' label='CONVERSE' />
                                    </Form.Group>
                                </Form>
                            </Accordion.Body>
                            <Accordion.Body>
                                <Form>
                                    <Form.Group controlId='formBasicCheckbox'>
                                        <Form.Check type='checkbox' label='DICKIES' />
                                    </Form.Group>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* ================================================================= */}
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Size</Accordion.Header>
                            <Accordion.Body className='firstChild'>
                                <Form>
                                    <Form.Group controlId='formBasicCheckbox'>
                                        <Form.Check type='checkbox' label='S' />
                                    </Form.Group>
                                </Form>
                            </Accordion.Body>
                            <Accordion.Body>
                                <Form>
                                    <Form.Group controlId='formBasicCheckbox'>
                                        <Form.Check type='checkbox' label='M' />
                                    </Form.Group>
                                </Form>
                            </Accordion.Body>
                            <Accordion.Body>
                                <Form>
                                    <Form.Group controlId='formBasicCheckbox'>
                                        <Form.Check type='checkbox' label='L' />
                                    </Form.Group>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* ================================================================= */}
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Color</Accordion.Header>
                            <Accordion.Body className='firstChild'>Exclusives</Accordion.Body>
                        </Accordion.Item>
                        {/* ================================================================= */}
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Price</Accordion.Header>
                            <Accordion.Body className='firstChild'>Exclusives</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    // FREE STORE PICKUP MODAL
    function FreeStorePickup(props) {
        return (
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Find My Store
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Choose Location</h4>
                    <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    // SAME DAY DELIVERY MODAL
    function SameDayDel(props) {
        return (
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Enter Your Address
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Address Form</h4>
                    <p>
                    Bacon ipsum dolor amet leberkas pork chop picanha short ribs kevin. Salami meatball kielbasa ribeye, kevin rump jowl tri-tip biltong boudin bacon chuck cow pork chop. Burgdoggen jerky buffalo tail. Pork andouille ground round ball tip pancetta doner, ham meatloaf short ribs buffalo pork chop spare ribs. Bresaola tenderloin meatball beef ribs t-bone, ribeye pancetta shankle sausage. Sausage shoulder landjaeger swine pork alcatra kevin pancetta buffalo ribeye. Shankle corned beef pastrami picanha cow porchetta turducken ball tip fatback doner pig frankfurter pancetta.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    

    //RETURN RETURN RETURN RETURN RETURN RETURN RETURN RETURN RETURN RETURN 
    return (
        <Nav id="filterMenu" className='d-flex flex-wrap justify-content-between sticky-top filterMenu' variant="pills" style={{'zIndex': 4, 'top': 0}}>
            <div>
                <Nav.Item>
                    <Nav.Link disabled>
                        Men's Clothing
                    </Nav.Link>
                </Nav.Item>
            </div>
            <div className='d-inline-flex flex-wrap align-items-center justify-content-center'>
                <span className='sortBy'>Sort By:</span>
                <NavDropdown className='btnStyle sortDropDwn' title="Newest" id="nav-dropdown">
                    <NavDropdown.Item>Recommended</NavDropdown.Item>
                    <NavDropdown.Item>Newest</NavDropdown.Item>
                    <NavDropdown.Item>Brand A - Z</NavDropdown.Item>
                    <NavDropdown.Item>Price Low - High</NavDropdown.Item>
                    <NavDropdown.Item>Price High - Low</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item className='filterBtn btnStyle'>
                    <Button id='innerBtn' variant="primary" onClick={() => setFilterShow(true)}>
                        Filter
                    </Button>

                    <FilterModal
                        show={filterShow}
                        onHide={() => setFilterShow(false)}
                    />
                </Nav.Item>
                <Nav.Item className='btnStyle'>
                    <OverlayTrigger
                        trigger="click"
                        placement='bottom'
                        overlay={
                            <Popover style={{zIndex: 5}}>
                            <Popover.Header as="h3">{`Anaheim Hills`}</Popover.Header>
                            <Popover.Body>
                                <Button variant="primary" onClick={() => setPickupShow(true)}>
                                    Free Store Pick Up
                                </Button>

                                <FreeStorePickup
                                    show={pickupShow}
                                    onHide={() => setPickupShow(false)}
                                />
                            </Popover.Body>
                            </Popover>
                        }
                        >
                        <Button variant="secondary">Free Store Pickup</Button>
                    </OverlayTrigger>
                </Nav.Item>
                <Nav.Item className='btnStyle'>
                    <OverlayTrigger
                        trigger="click"
                        placement='bottom'
                        overlay={
                            <Popover style={{zIndex: 5}}>
                            <Popover.Header as="h3">{`My Address`}</Popover.Header>
                            <Popover.Body>
                                <Button variant="primary" onClick={() => setDeliveryShow(true)}>
                                    Same Day Delivery
                                </Button>

                                <SameDayDel
                                    show={deliveryShow}
                                    onHide={() => setDeliveryShow(false)}
                                />
                            </Popover.Body>
                            </Popover>
                        }
                        >
                        <Button variant="secondary">Same Day Delivery</Button>
                    </OverlayTrigger>
                </Nav.Item>
            </div>
        </Nav>
    );
}

export default FilterMenu;