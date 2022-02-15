import React from 'react';
import { Nav, NavDropdown, OverlayTrigger, Popover, Button, Modal, Accordion } from 'react-bootstrap';
import '../../../scss/components/productSearch/childComp/filterMenu.scss';

function FilterMenu() {
    const [modalShow, setModalShow] = React.useState(false);

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
                    Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
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
                    Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
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
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Category</Accordion.Header>
                            <Accordion.Body>Shirts</Accordion.Body>
                            <Accordion.Body>Shirts</Accordion.Body>
                            <Accordion.Body>Shirts</Accordion.Body>
                            <Accordion.Body>Shirts</Accordion.Body>
                            <Accordion.Body>Shirts</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Featured</Accordion.Header>
                            <Accordion.Body>Flannels</Accordion.Body>
                            <Accordion.Body>Flannels</Accordion.Body>
                            <Accordion.Body>Flannels</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

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
                <NavDropdown className='btnStyle sortDropDwn' title="Newest" id="nav-dropdown">
                    <NavDropdown.Item>Recommended</NavDropdown.Item>
                    <NavDropdown.Item>Newest</NavDropdown.Item>
                    <NavDropdown.Item>Brand A - Z</NavDropdown.Item>
                    <NavDropdown.Item>Price Low - High</NavDropdown.Item>
                    <NavDropdown.Item>Price High - Low</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item className='filterBtn btnStyle'>
                    <Button id='innerBtn' variant="primary" onClick={() => setModalShow(true)}>
                        Filter
                    </Button>

                    <FilterModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Nav.Item>
                <Nav.Item className='btnStyle'>
                    <OverlayTrigger
                        trigger="click"
                        placement='bottom'
                        overlay={
                            <Popover style={{zIndex: 5}}>
                            <Popover.Header as="h3">{`Dunzo`}</Popover.Header>
                            <Popover.Body>
                                <Button variant="primary" onClick={() => setModalShow(true)}>
                                    Free Store Pick Up
                                </Button>

                                <FreeStorePickup
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
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
                            <Popover.Header as="h3">{`Dunzo`}</Popover.Header>
                            <Popover.Body>
                                <Button variant="primary" onClick={() => setModalShow(true)}>
                                    Same Day Delivery
                                </Button>

                                <SameDayDel
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
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