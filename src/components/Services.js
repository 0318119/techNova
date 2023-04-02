import React from 'react'
// ICONS ============
import Bord from './images/icons/bord-bg.png'
import OneSer from './images/icons/our_services_list1.webp'
import TwoSer from './images/icons/our_services_list2.webp'
import ThreeSer from './images/icons/our_services_list3.webp'
import FourSer from './images/icons/our_services_list4.webp'
import FiveSer from './images/icons/our_services_list5.webp'
import SixSer from './images/icons/our_services_list6.webp'
import headLines from './images/icons/headLines.png'
// MODULE CSS =============
import services from './css/services.module.css'


function Services() {
  return (
    <>
          <section className={`${services.services_sided_icon}`}>
              <div className="container">
                  <div className="row justify-content-center mt-3">
                      <h4 className={`${services.servicesHead}`}>Our Services</h4>
                      <img src={headLines} alt="" className={`${services.headLinesImg}`}/>
                  </div>
                  <div className="row">
                      <div className="col-4">
                          <div className={`${services.serviceBox}`}>
                              <h3 className={`${services.title}`}>Web Development</h3>
                              <div className={`${services.service_icon}`}>
                                  <span><img src={OneSer} alt="" /></span>
                              </div>
                              <div className={`${services.btnBox}`}>
                                  <img src={Bord} alt="" />
                                  <button>Read More</button>
                              </div>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className={`${services.serviceBox}`}>
                              <h3 className={`${services.title}`}>Ecommerce Development</h3>
                              <div className={`${services.service_icon}`}>
                                  <span><img src={TwoSer} alt="" /></span>
                              </div>
                              <div className={`${services.btnBox}`}>
                                  <img src={Bord} alt="" />
                                  <button>Read More</button>
                              </div>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className={`${services.serviceBox}`}>
                              <h3 className={`${services.title}`}>Moblie App Development</h3>
                              <div className={`${services.service_icon}`}>
                                  <span><img src={SixSer} alt="" /></span>
                              </div>
                              <div className={`${services.btnBox}`}>
                                  <img src={Bord} alt="" />
                                  <button>Read More</button>
                              </div>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className={`${services.serviceBox}`}>
                              <h3 className={`${services.title}`}>Digital Marketing</h3>
                              <div className={`${services.service_icon}`}>
                                  <span><img src={FourSer} alt="" /></span>
                              </div>
                              <div className={`${services.btnBox}`}>
                                  <img src={Bord} alt="" />
                                  <button>Read More</button>
                              </div>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className={`${services.serviceBox}`}>
                              <h3 className={`${services.title}`}>API Integration Services</h3>
                              <div className={`${services.service_icon}`}>
                                  <span><img src={FiveSer} alt="" /></span>
                              </div>
                              <div className={`${services.btnBox}`}>
                                  <img src={Bord} alt="" />
                                  <button>Read More</button>
                              </div>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className={`${services.serviceBox}`}>
                              <h3 className={`${services.title}`}>Website UI/UX</h3>
                              <div className={`${services.service_icon}`}>
                                  <span><img src={ThreeSer} alt="" /></span>
                              </div>
                              <div className={services.btnBox}>
                                  <img src={Bord} alt="" />
                                  <button>Read More</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

export default Services