import React, { useState } from 'react';
import '../css/web.css';
import '../css/header.css';
import '../css/footer.css';
import Header from '../components/headerviews/HeaderDropWeb';

const Web = () => {
    return (
        <div>
            <Header />
            <main className="web-main">
                <div className="web-page-banner">
                <div className="web-img-banner">
                <h1 className="web-info">
                        WEB DEVELOPMENT
                    </h1>
                <img className ="web-img" alt="Custom MERN" src="../public/MX/mern.jpg"/>
                </div>
                <div className="web-information">
                    <h1 className="web-slogan">We can help your web development ideas come to you!</h1>
                    <div className="web-section">
                    <h2 className="web-descript">Enhanced Web Development Services by Traffic & Barrier Solutions, LLC/Material WorX!
We specialize in crafting dynamic websites tailored to elevate your online presence. 
Our experienced web developer and Sign Shop Manager, William Rowell, harnesses the power of MERN Stack Development 
(MongoDB, ExpressJS, ReactJS, NodeJS) to deliver cutting-edge solutions. Wix might offer convenience, but it often falls short in delivering the flexibility and 
functionality that a truly customized website can provide. 
With our MERN stack expertise, we ensure that your website not only meets but exceeds your expectations.
Here`s why you should choose us for your web development needs:</h2>
<div className="web-info-dec">
        <div className="web-front">
                            <strong className="web-list">CREATIVE FRONT-END DESIGN:</strong> <h1 className="web-front-h1">
                            Utilizing ReactJS, we create visually stunning interfaces that seamlessly blend HTML, CSS, and JavaScript. 
                            Your website's aesthetics will be customized to reflect your brand's unique identity, ensuring a compelling user experience. 
                                </h1> 
                            </div>
                            <div className="web-back">
                            <strong className="web-list2">ROBUST BACK-END FUNCTIONALITY:</strong> 
                            <h1 className="web-back-h1">
                            Our expertise in NodeJS and ExpressJS enables us to build powerful back-end systems. 
                            From form submissions to user registrations and secure payments, 
                            our JavaScript-based solutions empower your website with essential functionalities.
                            </h1>
                            </div>
                            <div className="web-data">
                            <strong className="web-list3">SECURE DATA MANAGEMENT:</strong> 
                            <h1 className="web-data-h1">We leverage MongoDB to ensure robust data storage and management. 
                            Your users' information is securely stored and easily accessible, supporting seamless interactions and personalized experiences.
                            </h1>
                            </div>
                            <div className="web-channel">
                            <strong className="web-list4">EFFICIENT COMMUNICATIONS CHANNELS:</strong> 
                            <h1 className="web-channel-h1">Connect directly with your audience through integrated email functionalities. 
                            Whether it's notifications, newsletters, or personalized messages, our solutions keep you engaged with your users effortlessly.
                            </h1>
                        </div>
                        </div>
                        <div className="web-paragraph">
                            <h1 className="contact-web">CONTACT</h1>
                        <p className="web-para">Partner with Traffic & Barrier Solutions, LLC/Material WorX to transform your online vision into reality. Let us elevate your digital presence 
                            with our comprehensive web development services. Contact us today to discuss your project and take the first step towards online success.</p>
                            <h1 className="bryson-web"><strong className="bryson-strong">TBS/MX CEO:</strong> Bryson Davis</h1>
                            <a className="bryson-phone" href="tel:+17062630175">706-263-0175</a> or <a className="bryson-email" href="mailto:tbsolutions3@gmail.com">tbsolutions3@gmail.com</a>
                            <h1 className="will-web"><strong className="will-strong">Sign Shop Manager/Web Developer:</strong> William Rowell</h1>
                            <a className="will-phone" href="tel:+17068790106">706-879-0106</a> or <a className="will-email" href="mailto:tbsolutions9@gmail.com">tbsolutions9@gmail.com</a>
                    </div>
</div>
                    </div>
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
}
export default Web;