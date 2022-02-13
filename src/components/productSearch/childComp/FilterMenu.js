import React from 'react';
import { Nav, NavDropdown, OverlayTrigger, Popover, Button, Modal } from 'react-bootstrap';
import '../../../scss/components/productSearch/childComp/filterMenu.scss';

function FilterMenu() {
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
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
                    <OverlayTrigger
                        trigger="click"
                        placement='bottom'
                        overlay={
                            <Popover style={{zIndex: 5}}>
                            <Popover.Header as="h3">{`Dunzo`}</Popover.Header>
                            <Popover.Body>
                                <Button variant="primary" onClick={() => setModalShow(true)}>
                                    Launch vertically centered modal
                                </Button>

                                <MyVerticallyCenteredModal
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
                <Nav.Item className='px-3'>
                    <OverlayTrigger
                        trigger="click"
                        placement='bottom'
                        overlay={
                            <Popover style={{zIndex: 5}}>
                            <Popover.Header as="h3">{`Dunzo`}</Popover.Header>
                            <Popover.Body>
                                <Button variant="primary" onClick={() => setModalShow(true)}>
                                    Launch vertically centered modal
                                </Button>

                                <MyVerticallyCenteredModal
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