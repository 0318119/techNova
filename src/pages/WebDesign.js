import React from 'react'
import web_style from './assets/css/webdesign.module.css'
// ==============
import NavBar from '../components/NavBar'
// ==============
import { BsFillCheckCircleFill as Approve_ico } from "react-icons/bs";
import webImg from './assets/images/box_1.webp'
import web_prove_img from '../pages/assets/images/collage.webp'
import ScdCustomerSatisfaction from '../components/ScdCustomerSatisfaction';
// =====================
import web_thumb from '../pages/assets/images/web-thumb.png'
import WebDesignTabs from '../components/WebDesignTabs';
import WebPortfolio from '../components/WebPortfolio';
import WebPackages from '../components/Packages/WebPackages';
import DesignProcess from '../components/DesignProcess';
import RequestForm from '../components/RequestForm';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import why1 from '../components/assets/images/icons/watch.avi'
import why2 from '../components/assets/images/icons/why-2-w.avi'
import why3 from '../components/assets/images/icons/why-3-w.avi'
import why4 from '../components/assets/images/icons/why-4-w.avi'


function WebDesign() {
  return (
    <>
    
          <div className="allPagesBannerShape" id={`${web_style.bgBanner}`}>
              <NavBar />
              <section>
                  <div className="container">
                      <div className="row">
                        <div className="col-6">
                            <div className={`${web_style.webDesignBox}`}>
                                  <h5>Web Design Solutions</h5>
                                  <p>
                                      we help you achieve your goals with excellent web design and development services assisting you in making lasting impressions at first sight.
                                  </p>
                                  <ul className={`${web_style.webDesignList}`}>
                                      <li><Approve_ico />TOP-NOTCH DESIGNERS AND DEVELOPERS</li>
                                      <li><Approve_ico />FASTEST TURN-AROUND TIME</li>
                                      <li><Approve_ico />100% MONEY-BACK GUARANTEE</li>
                                      <li><Approve_ico />100% CUSTOMER SATISFACTION</li>
                                  </ul>
                                  <div className={`${web_style.btnBox}`}>
                                      <button className={`${web_style.btnOne}`}>Lets get started</button>
                                      <button className={`${web_style.btnTwo}`}>Our Portfolio</button>
                                  </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className={`${web_style.webDesignImgBox}`}>
                                <img src={webImg} alt="" />
                            </div>
                        </div>
                      </div>
                  </div>
              </section>
          </div>

          <section className={`${web_style.scdCusSatisfaction}`}>
                <div className="container">
                    <div className="row">
                        <h5 className={`${web_style.scdCusSatisfactHead}`}>Helping Businesses Outperform With Custom Digital Marketing Services</h5>
                        <p className={`${web_style.scdCusSatisfactDes}`}>TechNova is committed to providing professional digital services to your brand’s culture, core values & distinction. We take a strategic approach to creating unique brand identities by working with the industry’s best designers. We create perfect designs that speak for themselves.</p>
                    </div>
                </div>
              <div className={`${web_style.scdCusSatisfactionContainer}`}>
                  
                <ScdCustomerSatisfaction 
                    headOneTxt="Shortest Turnaround"
                    BoxOneDes="Quickly deliveries in design industries"
                    BoxOneIcon={why1}
                    //===========
                    headTwoTxt="20 Years Experience"
                    BoxTwoDes="Providing outstanding services all over the world"
                    BoxTwoIcon={why2}
                    //===========
                    headThreeTxt="Complete Satisfaction"
                    BoxThreeDes="Offering unmatched satisfaction when it comes to projects"
                    BoxThreeIcon={why3}
                    //===========
                    headFourTxt="Increased ROI"
                    BoxFourDes="Augmented Roi with weekly reports"
                    BoxFourIcon={why4}
                />
              </div>
          </section>

          <section className={`${web_style.webDescribeSection}`}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className={`${web_style.webDescribeMainBox}`}>
                            <div className={`${web_style.webDescribeImgbox}`}>
                                <img src={web_thumb} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={`${web_style.webDescribeContentBox}`}>
                              <h6>Make your audience stay with our technology-driven and intuitive solutions</h6>
                              <p>
                                  Customers search for things by using keywords. These keywords will link them to your website. For a valuable search engine, you need to have good web development. At American Website Designers LLC, our team comprises of highly talented individuals who know how to make your website interactive. We offer solutions for businesses looking for a smooth working website with an excellent UI. From basic websites to complex requirements, our team fulfills it all!
                              </p>
                              <div className={`${web_style.webDescribePointsBox}`}>
                                  <ul>
                                      <li><Approve_ico /> Get more consumers.</li>
                                      <li><Approve_ico /> Best user-centered designs.</li>
                                  </ul>
                                  <ul>
                                      <li><Approve_ico /> SEO friendly, highly interactive & mobile-friendly.</li>
                                      <li><Approve_ico /> Reach your audience and expand your business.</li>
                                  </ul>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          <WebPortfolio />
          <WebDesignTabs />
          <RequestForm />
          <WebPackages />
          <DesignProcess />

          <section className={`${web_style.webProveSection}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                          <div className={`${web_style.webProveBox}`}>
                               <div className="">
                                  <h5>We Excel At What We Do & Take Pride in How We Do It!</h5>
                                  <p>
                                      We are one of UK’s technology driven company and do our best to enable quality solutions. Staying ahead of the competition is no easy feat. and we have invested years in acquiring the knowledge and expertise that have enabled us to become one of a market kinds.
                                  </p>
                                  <button>Talk To Our Expert</button>
                               </div>
                          </div>
                    </div>
                      <div className="col-lg-6">
                          <div className={`${web_style.webProveBox}`}>
                              <img src={web_prove_img} alt="" />
                          </div>
                      </div>
                </div>
            </div>
          </section>
          <Testimonials />
          <ContactForm />
          <Footer />
    </>
  )
}

export default WebDesign