import React from 'react';
import SideMenu from './childComp/SideMenu.js';
import ProductDisplay from './childComp/ProductDisplay.js';
import FilterMenu from './childComp/FilterMenu.js';
import '../../scss/components/productSearch/productSearch.scss';

function ProductSearch() {
    return (
        <div className='container largeContainer' style={{padding: 0}}>
            <div className='row menuDispCont'>
                <div className='col-md-2 gy-3 sticky-md-top stickySideMenu'>
                    <SideMenu />
                </div>
                <div className='mobilePadding col-md-10' style={{padding: 0}}>
                    <FilterMenu />
                    <ProductDisplay />
                </div>
            </div>
        </div>
    );
}

export default ProductSearch;

