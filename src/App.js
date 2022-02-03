import React, { useState, useEffect } from 'react';
import JumboNav from "./components/JumboNav.js";
import Footer from './components/footer/Footer.js';
import MobileFooter from './components/footer/MobileFooter.js';
import ProductSearch from './components/productSearch/ProductSearch.js';

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
            <ProductSearch />
            {width >= 768 ? <Footer /> : <MobileFooter />}
        </div>
    );
}

export default App;
