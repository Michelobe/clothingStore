import React from 'react';
import { Accordion, Form } from 'react-bootstrap';
import '../../../scss/components/productSearch/childComp/sideMenu.scss';

function SideMenu() {
    return (
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
    );
}

export default SideMenu;

