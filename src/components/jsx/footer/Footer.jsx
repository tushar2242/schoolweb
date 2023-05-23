import React from 'react';
import { NavLink } from 'react-router-dom';
import bharatlogo from '../../images/logo1.png';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import facebook from '../../images/social-icon/facebook.png';
import instagram from '../../images/social-icon/instagram.png';
import twitter from '../../images/social-icon/twitter.png';
import linkedin from '../../images/social-icon/linkedin.png';
import youtube from '../../images/social-icon/youtube.png';


export default class Footer extends React.Component {

    render() {
        return (
            <>
                <FooterCode />
            </>
        )
    }
}

class FooterCode extends React.Component {
    render() {
        return (
            <>
                <div className="footer-bg">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <p className="tagline"></p>
                            <img src={bharatlogo} alt="logo" className="bharat-logo" />
                            <p className="tagline"></p>
                        </div>
                        <footer className="row py-5">
                            <div className="col mb-3">
                                <h5 className="footer-heading"><b>Information</b></h5>
                                <p className="borderline"></p>
                                <ul className="nav flex-column mt-4">
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> About Us</NavLink></li>
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> Terms & Conditions</NavLink></li>
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> Privacy Policy</NavLink></li>
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> Contact Us</NavLink></li>
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> Sitemap</NavLink></li>
                                </ul>
                            </div>
                            <div className="col mb-3">
                                <h5 className="footer-heading"><b>Quick Links</b></h5>
                                <p className="borderline"></p>
                                <ul className="nav flex-column mt-4">
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> Register Your School</NavLink></li>
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> Top 10 Schools</NavLink></li>
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> Trending Schools</NavLink></li>
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> FAQs</NavLink></li>
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> About</NavLink></li>
                                </ul>
                            </div>
                            <div className="col mb-3">
                                <h5 className="footer-heading"><b>Contact Us</b></h5>
                                <p className="borderline"></p>
                                <ul className="nav flex-column mt-4">
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><LocationOnSharpIcon className="fs-5"></LocationOnSharpIcon> Sati Plaza, Barrackpore,Kolkata - 120</NavLink></li>
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><EmailSharpIcon className="fs-5"></EmailSharpIcon> support@schooldekho.org <br></br> info@schooldekho.org</NavLink></li>
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><LocalPhoneSharpIcon className="fs-5"></LocalPhoneSharpIcon> 1800 - 2588 - 074</NavLink></li>
                                </ul>
                            </div>

                            <div className="col mb-3">
                                <h5 className="footer-heading"><b>Top Schools in India</b></h5>
                                <p className="borderline"></p>
                                <ul className="nav flex-column mt-4">
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> Top Schools in Jaipur</NavLink></li>
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> Top Schools in Delhi</NavLink></li>
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> Top Schools in Haryana</NavLink></li>
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> Top Schools in Rajasthan</NavLink></li>
                                    <li><NavLink to="/" className="nav-link p-0 footer-link"><ArrowRightAltSharpIcon></ArrowRightAltSharpIcon> Top Schools in Mumbai</NavLink></li>
                                </ul>
                            </div>
                            <p className="footer-line"></p>
                            <div className="social-box">
                                <p className="footer-para">Copyright © 2021-23 A2G Ventures. All rights reserved.</p>
                                <div className='footer-social-icons'>
                                    <NavLink to='https://www.facebook.com/bharatschools.org'><img src={facebook} alt="facebook" className="social-icon" /></NavLink>
                                    <NavLink to='https://www.instagram.com/bharatschoolsworld/'><img src={instagram} alt="instagram" className="social-icon ms-2" /></NavLink>
                                    <NavLink to='https://twitter.com/BharatSchoolOrg'><img src={twitter} alt="twitter" className="social-icon ms-2" /></NavLink>
                                    <NavLink to='https://www.youtube.com/@BharatSchoolOrg/featured'><img src={linkedin} alt="linkedin" className="social-icon ms-2" /></NavLink>
                                    <NavLink to='https://www.youtube.com/@BharatSchoolOrg/featured'><img src={youtube} alt="Youtube" className="social-icon ms-2" /></NavLink>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </>
        )
    }
}