import React, { useState, useRef,useEffect } from 'react'
// CSS ===================================
import style_Nav from '../components/css/NavBar.module.css'
// IMAGES ===================================
import logo from '../components/images/logo2022.png'
import usa_flag from '../components/images/icons/USA-FLAG.png'
import skype from '../components/images/icons/skype.png'
import message from '../components/images/icons/message.png'
// ICONS ===================================
import { BiPhoneCall } from "react-icons/bi";
import { BsFillTelephoneInboundFill as Phone_icon} from "react-icons/bs";
import { TfiAlignRight as SideBar_icon} from "react-icons/tfi";
import { BsFillEnvelopeFill as Envelope } from "react-icons/bs";
import { AiOutlineLinkedin as Linked_in} from "react-icons/ai";
import { BsChevronRight as Right_arrow} from "react-icons/bs";
import { AiFillCaretDown as Down_arrow} from "react-icons/ai";
import { AiOutlineClose as Crose_icon } from "react-icons/ai";


function NavBar() {
  const [isCloseBar, setCloseBar] = useState(true);
  const [isCloseActionBox, setCloseActionBox] = useState(true);
  const refOne = useRef();
  const refTwo  = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", maybeHandler);
  }, [])

  const maybeHandler = (e) => {
    if (!refOne.current.contains(e.target)) {
      setCloseBar(true)
    } 
    if (!refTwo.current.contains(e.target)){
      setCloseActionBox(true)
    }
  }


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
                  <SideBar_icon onClick={() => { setCloseBar(false) }} />
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

      <section className={isCloseBar ? `${style_Nav.closeBar}` : `${style_Nav.openBar}`} id={`${style_Nav.MenuSection}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div className={`${style_Nav.mainMenuBox}`}>

                {/* ================================= */}
                <div className={`${style_Nav.innerMenuBox}`}>
                  <ul>
                    <span></span>
                    <li><a href="">Home</a></li>
                    <li><a href="">Our work</a></li>
                    <li><a href="">Services <Right_arrow /></a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Our reviews</a></li>
                    <li><a href="">Contact us</a></li>
                    <li><a href="">Career</a></li>
                    <li><a href="">Hire us</a></li>
                    <li className='border-0'><a href="">Get a quote</a></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="col-10" ref={refOne}>
              <div className={`${style_Nav.dropDownBox}`}>
                <span className={`${style_Nav.closeSpan}`} onClick={() => {setCloseBar(true)}} >  close <Crose_icon className={`${style_Nav.crosIcon}`} /> </span>
                <div className={`${style_Nav.innerDropDownBox}`}>
                  <ul>
                    <h4>Web Development</h4>
                    <li><a href="">Web Design</a></li>
                    <li><a href="">Email Templates</a></li>
                    <li><a href="">Landing Page</a></li>
                    <li><a href="">UX Design</a></li>
                    <li><a href="">PHP</a></li>
                    <li><a href="">Laravel</a></li>
                    <li><a href="">NodeJS</a></li>
                    <li><a href="">ReactJS</a></li>
                    <li><a href="">NextJS</a></li>
                    <li><a href="">AngularJS</a></li>
                    <li><a href="">VueJS</a></li>
                  </ul>

                  <ul>
                    <h4>CMS Development</h4>
                    <li><a href="">Wordpress</a></li>
                    <li><a href="">Magento</a></li>
                    <li><a href="">Shopify</a></li>
                    <li><a href="">Joomla</a></li>
                    <li><a href="">Drupal</a></li>
                    <li><a href="">WooCommerce</a></li>
                    <li><a href="">Opencart</a></li>
                    <li><a href="">ClickFunnels</a></li>
                  </ul>

                  <ul>
                    <h4>Logo & Animation</h4>
                    <li><a href="">Iconic Logo</a></li>
                    <li><a href="">Typography Logo</a></li>
                    <li><a href="">Illustrative Logo</a></li>
                    <li><a href="">Animated Logo</a></li>
                    <li><a href="">3d Logo</a></li>
                    <li><a href="">2d Logo</a></li>
                    <span>Animations <Down_arrow /></span>
                    <li><a href="">2d Graphics Anime</a></li>
                    <li><a href="">3d Graphics Anime</a></li>
                    <li><a href="">Typography Anime</a></li>
                    <li><a href="">White Board Anime</a></li>
                  </ul>

                  <ul>
                    <h4>Mobile Apps</h4>
                    <li><a href="">Mobile Apps</a></li>
                    <li><a href="">Andriod Apps</a></li>
                    <li><a href="">IOS Apps</a></li>
                    <li><a href="">Web Apps</a></li>
                    <li><a href="">Native Apps</a></li>
                    <li><a href="">Hybrid Apps</a></li>
                  </ul>

                  <ul>
                    <h4>Digital Marketing</h4>
                    <li><a href="">SEM</a></li>
                    <li><a href="">Content Management</a></li>
                    <li><a href="">SMA</a></li>
                    <li><a href="">SMM</a></li>
                    <li><a href="">SEO</a></li>
                    <li><a href="">Pay Per Click</a></li>
                    <li><a href="">Email Marketing</a></li>
                  </ul>

                  <ul>
                    <h4>Print Media Design</h4>
                    <li><a href="">Brochure Design</a></li>
                    <li><a href="">T-Shirts &amp; Caps Design</a></li>
                    <li><a href="">Car Wraps</a></li>
                    <li><a href="">Stationary Design</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* <section className={`${style_Nav.callerBox}`} id={isCloseActionBox ? `${style_Nav.hideAction}` : `${style_Nav.showAction}`}>
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
      </section> */}
    </>
  )
}

export default NavBar