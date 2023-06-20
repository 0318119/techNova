import React, { useState, useRef,useEffect } from 'react'
import { Link } from "react-router-dom";
// CSS ===================================
import style_Nav from './assets/css/NavBar.module.css'
// IMAGES ===================================
import logo from '../components/assets/images/logo2022.png'
import usa_flag from '../components/assets/images/icons/USA-FLAG.png'
import skype from '../components/assets/images/icons/skype.png'
import message from '../components/assets/images/icons/message.png'
// ICONS ===================================
import { BiPhoneCall } from "react-icons/bi";
import { BsFillTelephoneInboundFill as Phone_icon} from "react-icons/bs";
import { TfiAlignRight as SideBar_icon} from "react-icons/tfi";
import { BsFillEnvelopeFill as Envelope } from "react-icons/bs";
import { BsPlusLg as Plus_ico } from "react-icons/bs";
import { AiOutlineLinkedin as Linked_in} from "react-icons/ai";
import { AiOutlineClose as Crose_icon } from "react-icons/ai";
import { FaFacebookF as Facebook_ico } from "react-icons/fa";
import { FaTwitter as Twitter_ico } from "react-icons/fa";
import { FaInstagram as Instagram_ico } from "react-icons/fa";
import { FaLinkedinIn as LinkedinIn_ico } from "react-icons/fa";


function NavBar() {
  const [isCloseBar, setCloseBar] = useState(false);
  const [isCloseActionBox, setCloseActionBox] = useState(true);
  const [isDropDown, setDropDown] = useState(false)
  const refOne = useRef();
  const refTwo  = useRef();

  useEffect(() => {
    
    const maybeHandler = (e) => {
      if (!refOne.current.contains(e.target)) {
        setCloseBar(true)
      } if (!refTwo.current.contains(e.target)){
        setCloseActionBox(true)
      }
    }
    document.addEventListener("mousedown", maybeHandler,true);
    return () => {
      document.removeEventListener("mousedown", maybeHandler, true)
    }
  }, [])



  return (
    <>
      <section className={`${style_Nav.navSection}`}>
        <div className={`${style_Nav.mainBox}` + " " + "container"}>
          <div className='row'>

            <div className='col-4'>
              <div className={`${style_Nav.logoBox}`}>
                <a>
                  <img src={logo}/>
                </a>
              </div>
            </div>
            <div className='col-1'></div>
            <div className='col-7'>
              <div className={`${style_Nav.menuBar}`}>
                <Phone_icon className={`${style_Nav.contactIcon}`}/>
                <Linked_in className={`${style_Nav.contactIcon}`}/>
                <Envelope className={`${style_Nav.contactIcon}`} />
                <button className={`${style_Nav.actBtns}`}>Get a Quote</button>
                <button className={`${style_Nav.actBtns}`}>Hire us</button>
                <div>
                  <button className={`${style_Nav.menuBtn}`} onClick={() => {setCloseBar(false)}}>Menu</button>
                  <SideBar_icon onClick={() => { setCloseBar(!isCloseBar) }} />
                </div>
                <div className={`${style_Nav.actionBox}`} ref={refTwo}>
                  <BiPhoneCall className={`${style_Nav.actIcon}`} onClick={() => {setCloseActionBox((current) => !current) }} />
                  <section className={`${style_Nav.callerBox}`} id={isCloseActionBox ? `${style_Nav.hideAction}` : `${style_Nav.showAction}`}>
                    <div>
                      <h5 className={`${style_Nav.getInTouch_head}`}>Get In Touch</h5>

                      <h6 className={`${style_Nav.salesTeam}`}>TECHNOVA Sales Team</h6>
                      <ul className={`${style_Nav.contentBox}`}>
                        <li>
                          <img src={usa_flag} alt="" />
                          <h5>1245785454</h5>
                        </li>
                        <li>
                          <img src={skype} alt="" />
                          <h5>TECHNOVA WEB</h5>
                        </li>
                        <li>
                          <img src={message} alt="" />
                          <h5>Sales@TECHNOVA.com</h5>
                        </li>
                      </ul>


                      <h6 className={`${style_Nav.salesTeam}`}>TECHNOVA HR Team</h6>
                      <ul className={`${style_Nav.contentBox}`}>
                        <li>
                          <img src={message} alt="" />
                          <h5>HR@TECHNOVA.com</h5>
                        </li>
                      </ul>

                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={`${style_Nav.menuSection}`} id={isCloseBar ? `${style_Nav.openBar}` : false}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={`${style_Nav.menuBox}`}>
                <div>
                  <Crose_icon className={`${style_Nav.navCloseIco}`} onClick={() => { setCloseBar(false) }}  />
                </div>
                <img src={logo} alt="" className={`${style_Nav.logoPic}`} />
                <ul className={`${style_Nav.navMenuList}`}>
                  <li><Link to='/'>Home</Link></li>
                  <li onClick={() => {setDropDown(!isDropDown)}}>
                    <Link to='/'>Services 
                      <Plus_ico style={{color: "white", marginLeft: "20px",fontSize: "25px"}}/>
                    </Link>
                  </li>
                  <li><Link to='/AboutUs'>About</Link></li>
                  <li><Link to='/OurReview'>Review</Link></li>
                  <li><Link to='/OurWork'>Our Work</Link></li>
                  <li><Link to='/Contact'>Contact</Link></li>
                  <li><Link to='/Contact'>Get a quote</Link></li>
                </ul>
                <ul className={`${style_Nav.navFooter}`}>
                  <h5>Follow US:</h5>
                  <div className="">
                    <li><Facebook_ico /></li>
                    <li><Instagram_ico /></li>
                    <li><LinkedinIn_ico /></li>
                    <li><Twitter_ico /></li>
                  </div>
                  <p>
                      © Tech Nova Company llc 2023,
                      All Rights Reserved.
                  </p>
                </ul>
                {/* ============== */}
                <div className={`${style_Nav.servicesDropDown}`} id={isDropDown ? `${style_Nav.showDropDown}` : `${style_Nav.hideDropDown}`}>
                  <ul>
                    <li><Link to="">Logo Design</Link></li>
                    <li><Link to="">Branding</Link></li>
                    <li><Link to="/WebDesign">Web Design</Link></li>
                    <li><Link to="">Web Development</Link></li>
                    <li><Link to="">Ecommerce</Link></li>
                    <li><Link to="">Mobile App</Link></li>
                    <li><Link to="">Motion Graphics</Link></li>
                    <li><Link to="">Web Content Writing</Link></li>
                    <li><Link to="">SEO</Link></li>
                    <li><Link to="">Local SEO</Link></li>
                    <li><Link to="">Social Media Marketing</Link></li>
                    <li><Link to="">Hosting</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={isCloseBar ? `${style_Nav.closeBar}` : `${style_Nav.openBar}`} id={`${style_Nav.MenuSection}`}>
        <div className="container-fluid">
          <div className="row" ref={refOne}>
            <div className="col-2">
              <div className={`${style_Nav.mainMenuBox}`}>

                <div className={`${style_Nav.innerMenuBox}`}>
                  <ul>
                    <span></span>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/OurWork">Our work</Link></li>
                    <li><Link to="">Services <Right_arrow /></Link></li>
                    <li><Link to="/AboutUs">About us</Link></li>
                    <li><Link to="/OurReview">Our reviews</Link></li>
                    <li><Link to="/Contact">Contact us</Link></li>
                    <li className='border-0'><Link to="/Contact">Get a quote</Link></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="col-10" >
              <div className={`${style_Nav.dropDownBox}`}>
                <span className={`${style_Nav.closeSpan}`} onClick={() => {setCloseBar(true)}} >  close <Crose_icon className={`${style_Nav.crosIcon}`} /> </span>
                <div className={`${style_Nav.innerDropDownBox}`}>
                  <ul>
                    <h4>Web Development</h4>
                    <li><Link to="/WebDesign">Web Design</Link></li>
                    <li><Link href="">Email Templates</Link></li>
                    <li><Link href="">Landing Page</Link></li>
                    <li><Link href="">UX Design</Link></li>
                    <li><Link href="">PHP</Link></li>
                    <li><Link href="">Laravel</Link></li>
                    <li><Link href="">NodeJS</Link></li>
                    <li><Link href="">ReactJS</Link></li>
                    <li><Link href="">NextJS</Link></li>
                    <li><Link href="">AngularJS</Link></li>
                    <li><Link href="">VueJS</Link></li>
                  </ul>

                  <ul>
                    <h4>CMS Development</h4>
                    <li><Link href="">Wordpress</Link></li>
                    <li><Link href="">Magento</Link></li>
                    <li><Link href="">Shopify</Link></li>
                    <li><Link href="">Joomla</Link></li>
                    <li><Link href="">Drupal</Link></li>
                    <li><Link href="">WooCommerce</Link></li>
                    <li><Link href="">Opencart</Link></li>
                    <li><Link href="">ClickFunnels</Link></li>
                  </ul>

                  <ul>
                    <h4>Logo & Animation</h4>
                    <li><Link href="">Iconic Logo</Link></li>
                    <li><Link href="">Typography Logo</Link></li>
                    <li><Link href="">Illustrative Logo</Link></li>
                    <li><Link href="">Animated Logo</Link></li>
                    <li><Link href="">3d Logo</Link></li>
                    <li><Link href="">2d Logo</Link></li>
                    <span>Animations <Down_arrow /></span>
                    <li><Link href="">2d Graphics Anime</Link></li>
                    <li><Link href="">3d Graphics Anime</Link></li>
                    <li><Link href="">Typography Anime</Link></li>
                    <li><Link href="">White Board Anime</Link></li>
                  </ul>

                  <ul>
                    <h4>Mobile Apps</h4>
                    <li><Link href="">Mobile Apps</Link></li>
                    <li><Link href="">Andriod Apps</Link></li>
                    <li><Link href="">IOS Apps</Link></li>
                    <li><Link href="">Web Apps</Link></li>
                    <li><Link href="">Native Apps</Link></li>
                    <li><Link href="">Hybrid Apps</Link></li>
                  </ul>

                  <ul>
                    <h4>Digital Marketing</h4>
                    <li><Link href="">SEM</Link></li>
                    <li><Link href="">Content Management</Link></li>
                    <li><Link href="">SMA</Link></li>
                    <li><Link href="">SMM</Link></li>
                    <li><Link href="">SEO</Link></li>
                    <li><Link href="">Pay Per Click</Link></li>
                    <li><Link href="">Email Marketing</Link></li>
                  </ul>

                  <ul>
                    <h4>Print Media Design</h4>
                    <li><Link href="">Brochure Design</Link></li>
                    <li><Link href="">T-Shirts &amp; Caps Design</Link></li>
                    <li><Link href="">Car Wraps</Link></li>
                    <li><Link href="">Stationary Design</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default NavBar