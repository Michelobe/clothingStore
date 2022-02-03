import React from 'react';
import SideMenu from './SideMenu.js';
import ProductDisplay from './ProductDisplay.js';
import '../../scss/components/productSearch/productSearch.scss';

function ProductSearch() {
    return (
        <div className='container largeContainer'>
            <div className='row menuDispCont'>
                <div className='col-md-2 gy-5 sticky-md-top stickySideMenu'>
                    <SideMenu />
                </div>
                <div className='mobilePadding col-md-10'>
                    <ProductDisplay />
                </div>
            </div>
        </div>
    );
}

export default ProductSearch;

