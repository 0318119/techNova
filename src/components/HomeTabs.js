import React from 'react'
// CSS ======================================
import home_page from './assets/css/homeFile.module.css'
// ICONS =========================================
import { FaMobileAlt as Mobile_ico} from "react-icons/fa";
import { CgWebsite as Web_ico } from "react-icons/cg";
import { GoSettings as CMS_ico } from "react-icons/go";
import { SiMarketo as Marketing_ico} from "react-icons/si";
import { GrServices as ApiServices_ico} from "react-icons/gr";
import Apple from './assets/images/icons/apple-may.webp'
import Android from './assets/images/icons/Android-may.webp'
import Ipad from './assets/images/icons/iPad-may.webp'
import windows from './assets/images/icons/Windows-may.webp'
import flutter from './assets/images/icons/Flutter-may.webp'
import hybrid from './assets/images/icons/Hybrid-may.webp'
import Xamarin from './assets/images/icons/Xamarin-may.webp'
import reactNative from './assets/images/icons/React-Native-may.webp'
import phoneGap from './assets/images/icons/PhoneGap-may.webp'
import ionic from './assets/images/icons/Ionic-may.webp'
import swift from './assets/images/icons/Swift-may.webp'
import java from './assets/images/icons/Java-may.webp'
import NodeJs from './assets/images/icons/NodeJS-may.webp'
import laravel from './assets/images/icons/Laravel-may.webp'
import openCart from './assets/images/icons/OpenCart-may.webp'
import shopify from './assets/images/icons/Shopify-may.webp'
import WooCommerce from './assets/images/icons/WooCommerce-may.webp'
import wordPress from './assets/images/icons/wordpress-may.webp'
import Django from '../components/assets/images/icons/Django-may.webp'
import AngularJs from '../components/assets/images/icons/AngularJS-may.webp'
import PPC from '../components/assets/images/icons/ppc-new-icon.webp'
import SEO from '../components/assets/images/icons/seo-new-icon.webp'
import EmailMarketing from '../components/assets/images/icons/e-mail-marketing.webp'
import ContentMarketing from '../components/assets/images/icons/content-marketing.webp'
import Facebook from '../components/assets/images/icons/facebook-marketing.webp'
import instagram from '../components/assets/images/icons/instagram-marketing.webp'
import LinkedIn from '../components/assets/images/icons/linkedIn-marketing.webp'
import Amazon from '../components/assets/images/icons/Amazon-may-1.webp'
import Authorize_net from '../components/assets/images/icons/authorize-net-may-1.webp'
import Custome_API from '../components/assets/images/icons/Custom-APIs-1.webp'
import Ebay from '../components/assets/images/icons/Ebay-may-1.webp'
import Google from '../components/assets/images/icons/google-may-1.webp'
import Paypal from '../components/assets/images/icons/Paypal-may-1.webp'
import Rest_API from '../components/assets/images/icons/Rest-APIs-1.webp'
import Stripe_API from '../components/assets/images/icons/Stripe-may-1.webp'
import Yahoo_API from '../components/assets/images/icons/Yahoo-may-1.webp'
// IMAGES ========================================================
import mobileApp from './assets/images/mobileAppDeveTab.webp'
import webDeve from './assets/images/webDeveTab.webp'
import CMS from './assets/images/cmsDeveTab.webp'
import DigitalMarketing from './assets/images/DigitalMarketing.webp'
import API_Services from './assets/images/APIServices.webp'



function HomeTabs() {
    return (
        <>
            <section className='homeTabSection'>
                <div className="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="HomeTab" role="tabpanel">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li role="presentation" class="active"><a href="#mobileAppDeve" aria-controls="home" role="tab" data-toggle="tab"><Mobile_ico /> <span>Mobile App Development</span> </a></li>
                                    <li role="presentation"><a href="#webDevelop" aria-controls="profile" role="tab" data-toggle="tab"><Web_ico/> <span>Web Application</span></a></li>
                                    <li role="presentation"><a href="#CMS" aria-controls="messages" role="tab" data-toggle="tab"><CMS_ico/> <span>CMS & Framework</span></a></li>
                                    <li role="presentation"><a href="#DigitalMarketing" aria-controls="messages" role="tab" data-toggle="tab"><Marketing_ico/> <span>Digital Marketing</span></a></li>
                                    <li role="presentation"><a href="#APIServices" aria-controls="messages" role="tab" data-toggle="tab"><ApiServices_ico /> <span>Api Services</span></a></li>
                                </ul>


                                <div class="tab-content tabs">
                                    <div role="tabpanel" class="tab-pane fade in active" id="mobileAppDeve">
                                        <div className="homeTabFlexBox">
                                            <div className="homeTabImageBox">
                                                <img src={mobileApp} alt="" />
                                            </div>
                                            <div className="homeTabTxt">
                                                <h4>Mobile Application Development</h4>
                                                <p>
                                                    Being a Top Mobile Application Development Company, we provide all Mobile App Development Services for all type of Mobile App Development needs using latest and trending technologies. We have an excellent in-house team of Mobile App Developers who is well experienced and skilled in Android App Development, Ios App Development and Cross platform App Development.
                                                </p>
                                                <div className="iconsBox">
                                                    <div className="innerIconBox">
                                                        <img src={Apple} alt="" />
                                                        <span>Apple</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={Android} alt="" />
                                                        <span>Android</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={Ipad} alt="" />
                                                        <span>Ipad</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={windows} alt="" />
                                                        <span>Widnows</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={flutter} alt="" />
                                                        <span>flutter</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={hybrid} alt="" />
                                                        <span>hybrid</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={Xamarin} alt="" />
                                                        <span>Xamarin</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={reactNative} alt="" />
                                                        <span>React-Native</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={phoneGap} alt="" />
                                                        <span>PhoneGap</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={ionic} alt="" />
                                                        <span>Ionic</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={swift} alt="" />
                                                        <span>Swift</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={java} alt="" />
                                                        <span>Java</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade" id="webDevelop">
                                        <div className="homeTabFlexBox">
                                            <div className="homeTabImageBox">
                                                <img src={webDeve} alt="" />
                                            </div>
                                            <div className="homeTabTxt">
                                                <h4>Web Development</h4>
                                                <p>
                                                    As one of the Top Web Development Company we provide high quality Web Development Services for all kind of Web Application Development requirements which cover different idustries all over the World. We have a great pool of in-house Web Developers who is proficient in all latest and trending technologies.
                                                </p>
                                                <div className="iconsBox">
                                                    <div className="innerIconBox">
                                                        <img src={NodeJs} alt="" />
                                                        <span>NodeJs</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={laravel} alt="" />
                                                        <span>Laravel</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={openCart} alt="" />
                                                        <span>OpenCart</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={shopify} alt="" />
                                                        <span>Shopify</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={WooCommerce} alt="" />
                                                        <span>WooCommerce</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={wordPress} alt="" />
                                                        <span>WordPress</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade" id="CMS">
                                        <div className="homeTabFlexBox">
                                            <div className="homeTabImageBox">
                                                <img src={CMS} alt="" />
                                            </div>
                                            <div className="homeTabTxt">
                                                <h4>CMS & Framework</h4>
                                                <p>
                                                    As a Top Website Development Company we work with all popular CMS & Frameworks. We are one of the Best WordPress Development Company, Best Laravel Development Company, Best Codeigniter Development Company and Best Magento Development Company, who have an expert team of each CMS and Framework. Our Team is well experienced in using any CMS and Framework with best of it.
                                                </p>
                                                <div className="iconsBox">
                                                    <div className="innerIconBox">
                                                        <img src={NodeJs} alt="" />
                                                        <span>NodeJs</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={laravel} alt="" />
                                                        <span>Laravel</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={openCart} alt="" />
                                                        <span>OpenCart</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={reactNative} alt="" />
                                                        <span>WordPress</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={shopify} alt="" />
                                                        <span>Shopify</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={WooCommerce} alt="" />
                                                        <span>WooCommerce</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={wordPress} alt="" />
                                                        <span>WordPress</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={Django} alt="" />
                                                        <span>Django</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={AngularJs} alt="" />
                                                        <span>AngularJs</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade" id="DigitalMarketing">
                                        <div className="homeTabFlexBox">
                                            <div className="homeTabImageBox">
                                                <img src={DigitalMarketing} alt="" />
                                            </div>
                                            <div className="homeTabTxt">
                                                <h4>Digital Marketing</h4>
                                                <p>
                                                    Our team is well versed and skilled enough to work on all Open Source Platforms. As a Best Open Source Development Company we provide high quality Open Source Development Services for kind of Frontend and Backend Web Application Needs. That's why we are Top Angularjs Development Company, Top Nodejs Development Company, Top ReactJS Development Company and Top VueJs Development Company.
                                                </p>
                                                <div className="iconsBox">
                                                    <div className="innerIconBox">
                                                        <img src={PPC} alt="" />
                                                        <span>PPC</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={SEO} alt="" />
                                                        <span>SEO</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={EmailMarketing} alt="" />
                                                        <span>e-mail Marketing</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={ContentMarketing} alt="" />
                                                        <span>Content Marketing</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={Facebook} alt="" />
                                                        <span>Facebook Marketing</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={instagram} alt="" />
                                                        <span>Instagram Marketing</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={LinkedIn} alt="" />
                                                        <span>LinkedIn Marketing</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div role="tabpanel" class="tab-pane fade" id="APIServices">
                                        <div className="homeTabFlexBox">
                                            <div className="homeTabImageBox">
                                                <img src={API_Services} alt="" />
                                            </div>
                                            <div className="homeTabTxt">
                                                <h4>Api Services</h4>
                                                <p>
                                                    We have experts who make high performing Back-end and API's for Mobile Applications and SOftware Applications. We are experts in developing custom Rest Api's and the same time our team is well experienced in working with any third party api's.
                                                </p>
                                                <div className="iconsBox">
                                                    <div className="innerIconBox">
                                                        <img src={Amazon} alt="" />
                                                        <span>Amazon</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={Authorize_net} alt="" />
                                                        <span>Authorize.net</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={Custome_API} alt="" />
                                                        <span>Custom-API's</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={Ebay} alt="" />
                                                        <span>Ebay</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={Google} alt="" />
                                                        <span>Google</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={Paypal} alt="" />
                                                        <span>Paypal</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={Rest_API} alt="" />
                                                        <span>Rest-API's</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={Stripe_API} alt="" />
                                                        <span>Stripe</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={WooCommerce} alt="" />
                                                        <span>WooCommerce</span>
                                                    </div>
                                                    <div className="innerIconBox">
                                                        <img src={Yahoo_API} alt="" />
                                                        <span>Yahoo</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeTabs