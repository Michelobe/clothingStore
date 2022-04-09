import React from 'react';
import { Link } from 'react-router-dom';
import '../../../scss/components/pages/landingPage/landingPage.scss';

function LandingPage() {
    return (
        <div>
            <div className='jumboDiscount d-flex p-2 my-3 bg-danger justify-content-center'>
                <Link to={`/products`}>
                    BANNER!
                </Link>
            </div>
            <div className='container'>
                <div className='mainJumbo'>
                    <Link to={`/products`}>
                        <div className='imgContainer'>
                            <img src={require('./colorLineup.jpg')} alt='tshirt colors' />
                        </div>
                    </Link>
                </div>
                <div className='doubleJumbo row'>
                    <Link to={`/products`} className='col'>
                        <div className='imgContainer'>
                            <img src={require('./coderHoodie.jpg')} alt='tshirt colors' />
                        </div>
                    </Link>
                    <Link to={`/products`} className='col'>
                        <div className='imgContainer'>
                            <img src={require('./workoutT.jpg')} alt='tshirt colors' />
                        </div>
                    </Link>
                </div>
            </div>
            <div className='jumboDiscount d-flex p-2 my-3 bg-warning justify-content-center'>
                <Link to={`/products`}>
                    BANNER!
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;