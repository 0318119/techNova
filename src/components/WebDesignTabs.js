import React from 'react'
import web_style from '../pages/assets/css/webdesign.module.css'
import { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// ==================================
import Responsive_Web_img from '../components/images/tab-img-1.webp'
import WordPress_web_img from '../components/images/tab-img-2.webp'
import E_commerce_web_img from '../components/images/tab-img-3.webp'
import Corporate_web_img from '../components/images/tab-img-4.webp'
import Flat_web_img from '../components/images/tab-img-5.webp'
import Landing_pages_img from '../components/images/tab-img-6.webp'
// ==================================
import 'react-tabs/style/react-tabs.css';

function WebDesignTabs() {
    const [isOneTabsActive, setOneTabsActive] = useState(true);
    const [isTwoTabsActive, settwoTabsActive] = useState();

  return (
    <>
    <section className={`${web_style.webTabsSection}`}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={`${web_style.webTabsBox}`}>
                              <Tabs>
                                  <TabList className={`${web_style.webTabsMenuBox}`}>
                                      <Tab className={`${web_style.webTabsMenu}`}>Responsive Web</Tab>
                                      <Tab className={`${web_style.webTabsMenu}`}>Wordpress Web</Tab>
                                      <Tab className={`${web_style.webTabsMenu}`}>E-commerce Web</Tab>
                                      <Tab className={`${web_style.webTabsMenu}`}>Corporate Web</Tab>
                                      <Tab className={`${web_style.webTabsMenu}`}>Flat Design Web</Tab>
                                      <Tab className={`${web_style.webTabsMenu}`}>Landing Pages</Tab>
                                  </TabList>

                                  <TabPanel className={`${web_style.webTabBox}`}>
                                      <div className={`${web_style.innerWebTabBox}`}>
                                          <div className={`${web_style.webTabFlexBox}`}>
                                              <h3>Responsive Websites</h3>
                                              <p>
                                                  Responsive websites enable you to reach your audience in much more appealing way than regular websites. Nowadays the majority of people use smartphones or tablets when browsing the web and responsive websites are able to adjust to varying screen sizes.
                                              </p>
                                              <div className={`${web_style.webTabBtnBox}`}>
                                                <button>Order Now</button>
                                                <button>Live Chat</button>
                                              </div>
                                        </div>
                                        <img src={Responsive_Web_img} alt="" />
                                      </div>
                                  </TabPanel>
                                  <TabPanel className={`${web_style.webTabBox}`}>
                                      <div className={`${web_style.innerWebTabBox}`}>
                                          <div className={`${web_style.webTabFlexBox}`}>
                                              <h3>Wordpress Websites</h3>
                                              <p>
                                                  Even though WordPress simplifies the process of making your own website, it isn’t entirely easy especially when it comes to the creative aspect of web development. We can help you in designing fully tailored websites using WordPress so you don’t have to.
                                              </p>
                                              <div className={`${web_style.webTabBtnBox}`}>
                                                  <button>Order Now</button>
                                                  <button>Live Chat</button>
                                              </div>
                                          </div>
                                          <img src={WordPress_web_img} alt="" />
                                      </div>
                                  </TabPanel>
                                  <TabPanel className={`${web_style.webTabBox}`}>
                                      <div className={`${web_style.innerWebTabBox}`}>
                                          <div className={`${web_style.webTabFlexBox}`}>
                                              <h3>E-commerce Websites</h3>
                                              <p>
                                                  What makes an ecommerce website more effective than they already are? Merchant integration, CMS, product reports, and discount coupons are just some of the ways in which we provide complete online solutions to enhance your yearly revenues.
                                              </p>
                                              <div className={`${web_style.webTabBtnBox}`}>
                                                  <button>Order Now</button>
                                                  <button>Live Chat</button>
                                              </div>
                                          </div>
                                          <img src={E_commerce_web_img} alt="" />
                                      </div>
                                  </TabPanel>
                                  <TabPanel className={`${web_style.webTabBox}`}>
                                      <div className={`${web_style.innerWebTabBox}`}>
                                          <div className={`${web_style.webTabFlexBox}`}>
                                              <h3>Corporate Websites</h3>
                                              <p>
                                                  An effective corporate website increases the credibility of your brand and boosts your company’s image. These websites aim to provide information about your products and services so that every viewer is able to fully understand what you stand for.
                                              </p>
                                              <div className={`${web_style.webTabBtnBox}`}>
                                                  <button>Order Now</button>
                                                  <button>Live Chat</button>
                                              </div>
                                          </div>
                                          <img src={Corporate_web_img} alt="" />
                                      </div>
                                  </TabPanel>
                                  <TabPanel className={`${web_style.webTabBox}`}>
                                      <div className={`${web_style.innerWebTabBox}`}>
                                          <div className={`${web_style.webTabFlexBox}`}>
                                              <h3>Flat Design Websites</h3>
                                              <p>
                                                  Flat design websites implement minimalist user interface designs that are effective for apps and websites. Simple yet attractive, flat design websites focus purely on the content and nothing else. The focus on simplicity leads to a streamlined user experience.
                                              </p>
                                              <div className={`${web_style.webTabBtnBox}`}>
                                                  <button>Order Now</button>
                                                  <button>Live Chat</button>
                                              </div>
                                          </div>
                                          <img src={Flat_web_img} alt="" />
                                      </div>
                                  </TabPanel>
                                  <TabPanel className={`${web_style.webTabBox}`}>
                                      <div className={`${web_style.innerWebTabBox}`}>
                                          <div className={`${web_style.webTabFlexBox}`}>
                                              <h3>Landing Pages</h3>
                                              <p>
                                                  Landing pages are essential when you are marketing your products and services online through your website since it gives the first impression of your work. A landing page is also known as the main page of a website.
                                              </p>
                                              <div className={`${web_style.webTabBtnBox}`}>
                                                  <button>Order Now</button>
                                                  <button>Live Chat</button>
                                              </div>
                                          </div>
                                          <img src={Landing_pages_img} alt="" />
                                      </div>
                                  </TabPanel>
                              </Tabs>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WebDesignTabs