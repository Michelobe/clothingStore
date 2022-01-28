import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../scss/components/productSearch/productDisplay.scss';

function ProductDisplay() {
    return (
        <div className='container'>
            <div className='row row-cols-sm-4 row-cols-md-4 justify-content-around'>
                <Card className='col gy-5 displayCard'>
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
                <Card className='col gy-5 displayCard'>
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
                <Card className='col gy-5 displayCard'>
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
                <Card className='col gy-5 displayCard'>
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
                <Card className='col gy-5 displayCard'>
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
                <Card className='col gy-5 displayCard'>
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
    );
}

export default ProductDisplay;
