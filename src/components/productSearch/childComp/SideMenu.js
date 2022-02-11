import React from 'react';
import { Accordion } from 'react-bootstrap';
import '../../../scss/components/productSearch/childComp/sideMenu.scss';

function SideMenu() {
    return (
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
    );
}

export default SideMenu;

