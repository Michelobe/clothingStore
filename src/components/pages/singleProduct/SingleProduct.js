import React from 'react';
import '../../../scss/components/pages/singleProduct/singleProduct.scss';

function SingleProduct() {
    return (
        <div className='container'>
            <div>
                <p>Home &gt; MEN &gt; Clothing &gt; T-Shirts</p>
            </div>
            <div className='container row'>
                <div className='leftCol col-6'>
                    <div className='row'>
                        <div className='col-2'>
                            <div className='thumbImg row'>
                                <img src={require('./shoe.jpg')} alt='sweatshirt' />
                            </div>
                            <div className='thumbImg row'>
                                <img src={require('./shoe.jpg')} alt='sweatshirt' />
                            </div>
                        </div>
                        <div className='jumboImg col-10 mx-auto'>
                            <img src={require('./shoe.jpg')} alt='sweatshirt' />
                        </div>
                    </div>
                </div>
                <div className='rightCol col-6'>
                    <div className='introChoices row'>
                        <div className='col'>
                            <h2>Santa Cruz Seatshirt</h2>
                            <p>$39.99</p>
                            <p>Interest-free insallments by afterpay</p>
                            <div className='colorContainer row'>
                                <div className='col-2'>
                                    <p>Color:</p>
                                </div>
                                <div className='col-12'>
                                    <div className='row'>
                                        <p>BLACK</p>
                                    </div>
                                    <div className='row'>
                                        <div className='colorChoice'>
                                            <div className='swatch'></div>
                                        </div>
                                        <div className='colorChoice'>
                                            <div className='swatch'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sizeContainer row'>
                                <div className='col-2'>
                                    <p>Size:</p>
                                </div>
                                <div className='col-12'>
                                    <div className='d-flex flex-row'>
                                        <div className='size px-3 py-1'>S</div>
                                        <div className='size px-3 py-1'>M</div>
                                        <div className='size px-3 py-1'>L</div>
                                        <div className='size px-3 py-1'>XL</div>
                                    </div>
                                </div>
                            </div>
                            <p>Size Chart</p>
                            <button>Add to Bag</button>
                            <div className='shippingInfo bg-light'>
                                <p>Shipping</p>
                                <p>3-8 Business Days with Economy</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <h6>Details</h6>
                            <p> Increase the peace with this officially licensed apparel. 100% Cotton. Prewashed for minimal shrinkage. Machine washable. Printed in the U.S.A. This item is unisex fit and sizing.</p>
                        </div>
                    </div>
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
                </div>
            </div>
            <div className='row'>
                <p>YOU MAY ALSO LIKE</p>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <img src={require('./shoe.jpg')} alt='sweatshirt' />
                    </div>
                    <div className='row'>
                        <p>Santa Cruz sweatshirt</p>
                    </div>
                </div>
                <div className='col'>
                    <div className='row'>
                        <img src={require('./shoe.jpg')} alt='sweatshirt' />
                    </div>
                    <div className='row'>
                        <p>Santa Cruz sweatshirt</p>
                    </div>
                </div>
                <div className='col'>
                    <div className='row'>
                        <img src={require('./shoe.jpg')} alt='sweatshirt' />
                    </div>
                    <div className='row'>
                        <p>Santa Cruz sweatshirt</p>
                    </div>
                </div>
                <div className='col'>
                    <div className='row'>
                        <img src={require('./shoe.jpg')} alt='sweatshirt' />
                    </div>
                    <div className='row'>
                        <p>Santa Cruz sweatshirt</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;