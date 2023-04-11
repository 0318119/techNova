import React from 'react'
import footer_style from './css/footer.module.css'
import { BiPhoneCall as Call_ico} from "react-icons/bi";
import { AiOutlineMail as Mail_ico} from "react-icons/ai";
import { MdOutlineLocationOn as Locate_ico} from "react-icons/md";
import logo from '../components/images/logo2022.png'
import { FaFacebookF as Facebook_ico } from "react-icons/fa";
import { FaTwitter as Twitter_ico } from "react-icons/fa";
import { FaInstagram as Instagram_ico } from "react-icons/fa";
import { FaLinkedinIn as LinkedinIn_ico } from "react-icons/fa";
import { FaCcMastercard as Mastercard_ico } from "react-icons/fa";
import { FaCcVisa as Visa_ico } from "react-icons/fa";
import { FaCcStripe as Stripe_ico } from "react-icons/fa";
import { FaPaypal as Paypal_ico } from "react-icons/fa";
import { FaCcDiscover as Discover_ico } from "react-icons/fa";
import { SiPayoneer as Payoneer_ico} from "react-icons/si";





function Footer() {
  return (
    <>
    <section className={`${footer_style.footerSection}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className={`${footer_style.footerMallingBox}`}>
                        <div className={`${footer_style.botLogoBox}`}>
                            <a href="">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <ul>
                            <li>
                                <Call_ico />
                                <a href="">(2424) 53556 01</a>
                            </li>
                            <li>
                                <Mail_ico />
                                <a href="">sales@technova.com</a>
                            </li>
                            <li>
                                <Locate_ico />
                                <a href="">
                                    Mailing Address :
                                     <span>
                                          PMB #1015 Parsippany, NJ 07054
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={`${footer_style.footerLinksBox}`}>
                        <h4>Services</h4>
                        <ul>
                            <li><a href="">Web Design</a></li>
                            <li><a href="">UX Design</a></li>
                            <li><a href="">Iconic Logo</a></li>
                            <li><a href="">Mobile Apps</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={`${footer_style.footerLinksBox}`}>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Testimonials</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={`${footer_style.footerCardBox}`}>
                        <h4>We Do Accept</h4>
                        <ul className={`${footer_style.socialLinks}`}>
                            <li><a href=""><Facebook_ico/></a></li>
                            <li><a href=""><Twitter_ico/></a></li>
                            <li><a href=""><Instagram_ico/></a></li>
                            <li><a href=""><LinkedinIn_ico /></a></li>
                        </ul>
                        <ul className={`${footer_style.cardsIcons}`}>
                            <li><Mastercard_ico /></li>
                            <li><Visa_ico /></li>
                            <li><Discover_ico /></li>
                            <li><Stripe_ico /></li>
                            <li><Paypal_ico /></li>
                            <li><Payoneer_ico /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ul className={`${footer_style.copyRightSection}`}>
                        <span>© 2022 Tech Nova | All Rights Reserved.</span>
                       <div className="">
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                       </div>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer