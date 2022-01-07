import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProductDisplay() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col gy-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./shoe.jpg')} alt='shoe' />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col gy-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./shoe.jpg')} alt='shoe' />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col gy-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./shoe.jpg')} alt='shoe' />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col gy-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./shoe.jpg')} alt='shoe' />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col gy-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./shoe.jpg')} alt='shoe' />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col gy-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./shoe.jpg')} alt='shoe' />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
