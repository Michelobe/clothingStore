import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JumboNav from "./components/includes/JumboNav.js";
import LandingPage from './components/pages/landingPage/LandingPage.js';
import ProductSearch from './components/pages/productSearch/ProductSearch.js';
import SingleProduct from './components/pages/singleProduct/SingleProduct.js';
import Footer from './components/includes/footer/Footer.js';
import MobileFooter from './components/includes/footer/MobileFooter.js';

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
        <Router>
            <div className="App">
                <JumboNav />
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/products' element={<ProductSearch />} />
                    <Route path='/item' element={<SingleProduct />} />
                </Routes>
                {width >= 768 ? <Footer /> : <MobileFooter />}
            </div>
        </Router>
    );
}

export default App;
