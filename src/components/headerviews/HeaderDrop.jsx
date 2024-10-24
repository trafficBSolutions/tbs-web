import React, { useState } from 'react';
import images from '../../utils/tbsImages';
function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleMenu = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="header">
            <a className="header-logo" href="/">
                <img alt="TBS logo" className="tbs-logo-img" src={images["../assets/tbs_companies/tbs.svg"].default} />
            </a>
            <div className="mobile-nav-icon">
                <button className="mobile-nav" onClick={toggleMenu}>
                    <ion-icon className="icon-mobile-nav" name="menu-outline">---</ion-icon>
                </button>
            </div>
            <nav className={`main-nav ${isNavOpen ? 'active' : ''}`}>
            
                <ul className="main-nav-list">
                    <li><a className="main-nav-link" href="/trafficcontrol">Traffic Control</a></li>
                    <li><a className="main-nav-link" href="/trafficplanning">Traffic Control Plans</a></li>
                    <li><a className="main-nav-link" href="/bollardswheels">Bollards & Wheel Stops</a></li>
                    <li><a className="main-nav-link" href="/signs">Traffic Sign Manufacturing</a></li>
                    <li><a className="main-nav-link" href="/ppe">PPE Sales</a></li>
                    <li><a className="main-nav-link" href="/rentals">Equipment Rental & Sales</a></li>
                </ul>
            </nav>
            <div className="header-worx-links">
            <a className="header-worx-logo" target="_blank" rel="noopener noreferrer" href="https://www.material-worx.com">
                    <img className="material-worx-img" alt="Material WorX logo" src={images["../assets/tbs_companies/Material WorX.svg"].default} />
                    <h1 className="material-worx-text">Custom Shop</h1>
                </a>
            </div>
        </header>
    );
}

export default Header;
