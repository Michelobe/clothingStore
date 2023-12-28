import React from 'react';
// import { Link } from 'react-router-dom';
import '../../../scss/components/pages/landingPage/landingPage.scss';
//IMAGES
import GrudenBobble from "../../../images/pages/landingPage/grudenBobble.jpg";
import RaidersCap from "../../../images/pages/landingPage/raidersCap.jpg";
import RaiderClothes from "../../../images/pages/landingPage/raiderClothes.jpg";
import ShopMen from "../../../images/pages/landingPage/shopMen.jpg";
import ShopWomen from "../../../images/pages/landingPage/shopWomen.jpg";
import FloralShirt from "../../../images/pages/landingPage/floralShirt.jpg";
import TommyBahama from "../../../images/pages/landingPage/tommyBahama.jpg";
import FloralShorts from "../../../images/pages/landingPage/floralShorts.jpg";
import RaiderBikini from "../../../images/pages/landingPage/raiderBikini.jpg";
import RaiderCooler from "../../../images/pages/landingPage/raiderCooler.jpg";
import ShopKids from "../../../images/pages/landingPage/shopKids.png";
import ShopJerseys from "../../../images/pages/landingPage/shopJerseys.png";
import ShopHats from "../../../images/pages/landingPage/shopHats.png";
import ShopNovelty from "../../../images/pages/landingPage/shopNovelties.png";
import CustomJersey from "../../../images/pages/landingPage/customJersey.png";

function LandingPage() {
    return (
        <div>
            <section id="jumboTron">
                <div class="leftArrow">
                    <a href="#home"><i class="fas fa-chevron-left"></i></a>
                </div>
                <div class="rightArrow">
                    <a href="#home"><i class="fas fa-chevron-right"></i></a>
                </div>
                <div class="jumboOne">
                    <img src={GrudenBobble}alt="Gruden Bobble" />
                </div>
                <div class="jumboTwo">
                    <img src={RaidersCap}alt="Raider Cap" />
                </div>
                <div class="jumboThree">
                    <img src={RaiderClothes}alt="Raider Clothes" />
                </div>
            </section>
        
            <section id="featured">
                <div class="container">
                    <div class="shopGender">
                    <div class="shopOne">
                        <a href="#home"><img src={ShopMen}alt="Shop Men" /></a>
                    </div>
                    <div class="shopTwo">
                        <a href="#home"><img src={ShopWomen}alt="Shop Women" /></a>
                    </div>
                    </div>
            
                    <div class="featuredNav">
                    <ul>
                        <li>
                        <a href="#home">Featured</a>
                        </li>
                        <li>
                        <a href="#home">New</a>
                        </li>
                        <li>
                        <a href="#home">Fan News</a>
                        </li>
                        <li>
                        <a href="#home">Players</a>
                        </li>
                    </ul>
                    </div>
            
                    <div class="shopDisplay">
                        <div class="card">
                            <img src={FloralShirt}alt="Floral Shirt" />
                            <div class="picDetails">
                            <h5 class="price">$69.99</h5>
                            <p>Raiders Floral Shirt</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={TommyBahama}alt="Tommy Bahama" />
                            <div class="picDetails">
                            <h5 class="price">$69.99</h5>
                            <p>Raiders Tommy</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={FloralShorts}alt="Floral Shorts" />
                            <div class="picDetails">
                            <h5 class="price">$69.99</h5>
                            <p>Raiders Tommy</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={RaiderBikini}alt="Raider Bikini" />
                            <div class="picDetails">
                            <h5 class="price">$69.99</h5>
                            <p>Raiders Tommy</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={RaiderCooler}alt="Raider Cooler" />
                            <div class="picDetails">
                            <h5 class="price">$69.99</h5>
                            <p>Raiders Tommy</p>
                            </div>
                        </div>
                    </div>
            
                    <div class="shopAll">
                        <a href="#home">
                            <img src={ShopKids} alt="Shop Kids" />
                        </a>
                        <a href="#home">
                            <img src={ShopJerseys} alt="Shop Jerseys" />
                        </a>
                        <a href="#home">
                            <img src={ShopHats} alt="Shop Hats" />
                        </a>
                        <a href="#home">
                            <img src={ShopNovelty} alt="Shop Novelties" />
                        </a>
                    </div>
            
                    <div class="personalJersey">
                        <a href="#home">
                            <img src={CustomJersey} alt="Custom Jersey" />
                        </a>
                    </div>
                </div>
            </section>
        
            <section id="raiderNation">
                <div class="container">
                    <div class="header">
                        <h1>#RaiderNation</h1>
                    </div>
                    <div class="raiderContact">
                        <div class="newsLetter">
                            <h3>Sign up for our newsletter</h3>
                            <p>Sign up and receive special offers & discounts from RaiderImage.com</p>
                            <div class="contactInput">
                            <input type = "text"
                                    placeholder = "Enter your email address" />
                            <div class="subscribeButton">Subscribe</div>
                            </div>
                        </div>
                        <div class="socialMedia">
                            <ul>
                            <li><a href="www.facebook.com" target = "_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="www.twitter.com" target = "_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="www.instagram.com" target = "_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="www.raiders.com/fan/" target = "_blank"><i class="fab fa-teamspeak"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;



