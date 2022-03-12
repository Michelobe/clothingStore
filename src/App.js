import React, { useState, useEffect } from 'react';
import JumboNav from "./components/includes/JumboNav.js";
import Footer from './components/includes/footer/Footer.js';
import MobileFooter from './components/includes/footer/MobileFooter.js';
// import ProductSearch from './components/pages/productSearch/ProductSearch.js';
import SingleProduct from './components/pages/singleProduct/SingleProduct.js';

function App() {
    const {width} = useWindowDimensions();

    function getWindowDimensions(){
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(()=>{
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    return (
        <div className="App">
            <JumboNav />
            {/* <ProductSearch /> */}
            <SingleProduct />
            {width >= 768 ? <Footer /> : <MobileFooter />}
        </div>
    );
}

export default App;
