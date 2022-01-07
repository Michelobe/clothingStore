import React from 'react';
import SideMenu from './SideMenu.js';
import ProductDisplay from './ProductDisplay.js';
import '../../scss/components/productSearch/productSearch.scss';

function ProductSearch() {
    return (
        <div className='container-md'>
            <div className='row'>
                <div className='col-md-3 gy-5 sticky-md-top stickySideMenu'>
                    <SideMenu />
                </div>
                <div className='col-md-9'>
                    <ProductDisplay />
                </div>
            </div>
        </div>
    );
}

export default ProductSearch;

