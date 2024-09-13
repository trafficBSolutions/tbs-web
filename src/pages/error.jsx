import React, {useState} from 'react';
import '../css/error.css';
const Error = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleMenu = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
<div>
            <header className="header">
    <a className="header-logo" href="/">
        <img alt="TBS logo" className="tbs-logo-img" src="../public/tbs_companies/TBS Logo1.png" />
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
            <li><a className="main-nav-link" href="/bollards">Bollards & Wheel Stops</a></li>
            <li><a className="main-nav-link" href="/signs">Traffic Sign Manufacturing</a></li>
            <li><a className="main-nav-link" href="/ppe">PPE Sales</a></li>
            <li><a className="main-nav-link" href="/rentals">Equipment Rental & Sales</a></li>
        </ul>
    </nav>
    <div className="header-worx-links">
    <a className="header-worx-logo" href="/materialworx">
        <img className="material-worx-img"alt="Material WorX logo" src="../public/tbs_companies/material worx.png"/>
        <h1 className="material-worx-text">Custom Shop</h1>
    </a>
    </div>
</header>
<main className="error-main">
    <div className="error-img">
        <img className="error-img-1" alt="error" src="../public/tbs_companies/TBS Cone.png"/>
    </div>
<div className="not-found-container">
            <h1 className="NotFound">404 - Not Found</h1>
            <p className="page-info">The page you are looking for might have been removed, had its name changed, or does not exist.</p>
            <button className="btn btn--full link-button" to="/">Back to Home Page</button>
            </div>
</main>
<footer className="footer">
<div className="social-icons">
                <a className="social-icon" href="https://www.facebook.com/tbssigns2022/" target="_blank" rel="noopener noreferrer">
                    <img className="facebook-img" src="../public/social media/facebook.png" alt="Facebook" />
                </a>
                <a className="social-icon" href="https://www.tiktok.com/@tbsmaterialworx?_t=8lf08Hc9T35&_r=1" target="_blank" rel="noopener noreferrer">
                    <img className="tiktok-img" src="../public/social media/tiktok.png" alt="TikTok" />
                </a>
                <a className="social-icon" href="https://www.instagram.com/tbsmaterialworx?igsh=YzV4b3doaTExcjN4&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <img className="insta-img" src="../public/social media/instagram.png" alt="Instagram" />
                </a>
            </div>
    <div className="site-footer__inner container container--narrow">
        <div className="footer-content">
          <img className="tbslogo" alt="TBS logo" src="../public/tbs_companies/TBS Logo1.png" />
          <ul className="footer-navigate">
        <li><a className="footer-nav-link" href="/trafficcontrol">Traffic Control</a></li>
        <li><a className="footer-nav-link" href="/trafficplanning">Traffic Control Plans</a></li>
        <li><a className="footer-nav-link" href="/bollardswheels">Bollard Installation</a></li>
        <li><a className="footer-nav-link" href="/signs">Traffic Sign Manufacturing</a></li>
        <li><a className="footer-nav-link" href="/ppe">PPE Sales</a></li>
        <li><a className="footer-nav-link" href="/rentals">Equipment Rental & Sales</a></li>
      </ul>
        </div>
        <div className="footer-contact">
            <div className="statement-box">
                <p className="statement">
                    <b className="safety-b">Safety Statement: </b>
                    At TBS, safety is our top priority. We are dedicated to ensuring the well-being of our employees, clients, 
                    and the general public in every aspect of our operations. Through comprehensive safety training, 
                    strict adherence to regulatory standards, and continuous improvement initiatives, 
                    we strive to create a work environment where accidents and injuries are preventable. 
                    Our commitment to safety extends beyond compliance—it's a fundamental value embedded in everything we do. 
                    Together, we work tirelessly to promote a culture of safety, 
                    accountability, and excellence, because when it comes to traffic control, there's no compromise on safety.
                </p>
                <p className="trademark-warning">
                  <b className="warning-trade">WARNING:</b><b> Trademark Notice</b><img className="trademark-img" src="../public/tbs_companies/TBS Logo1.png"></img> is a registered trademark of Traffic & Barrier Solutions, LLC. 
                  Unauthorized use of this logo is strictly prohibited and may result in legal action. 
                  All other trademarks, logos, and brands are the property of their respective owners.
                </p>
            </div>
            <h1 className="footer-number">706-263-0175</h1>
        </div>
    </div>
</footer>
        </div>
)
};
export default Error;