import React from 'react';
import JumboNav from "./components/JumboNav.js";
import MenuNav from './components/MenuNav.js';
import Footer from './components/Footer.js';
import ProductSearch from './components/productSearch/ProductSearch.js';

function App() {

    return (
        <div className="App">
            <JumboNav />
            <MenuNav />
            <ProductSearch />
            <Footer />
        </div>
    );
}

export default App;
