import React from 'react'
// ICONS ============
import why1 from './images/icons/watch.avi'
import why2 from './images/icons/why-2-w.avi'
import why3 from './images/icons/why-3-w.avi'
import why4 from './images/icons/why-4-w.avi'
import headLines from './images/icons/headLines.png'
// MODULE CSS =============
import services from './css/services.module.css'


function Services() {
  return (
    <>
          <section className={`${services.services_sided_icon}`}>
              <div className="container">
                  <div className="row justify-content-center mt-3">
                      <h4 className={`${services.servicesHead}`}>
                          Why Should You Hire Design Stallion As Your Digital Marketing Company?
                      </h4>
                      <img src={headLines} alt="" className={`${services.headLinesImg}`}/>
                      <p>
                          As the leading digital marketing company in USA, we strive to understand your business goals first as a client before else. We have assisted thousands of clients to help them elevate their business either small or large around the globe to build transparent, accountable and great results with our succeeding and unique strategies to boost brand awareness. Our unique methodology creates a gateway for each decision we make to align with your business goals in mind and this is how we take the lead elevating values for your business through our creative digital marketing services.
                      </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-3">
                        <div className={`${services.servicesBox}`} id={`${services.servicesBoxActive}`}>
                            <img src={why1} alt="" />
                            <div className={`${services.servicesContentBox}`}>
                                <h4>Quick Turn-Around</h4>
                                <p>Get Project Delivered Before Your Expectations</p>
                            </div>
                        </div>
                    </div>
                      <div className="col-lg-3">
                          <div className={`${services.servicesBox}`}>
                              <img src={why2} alt="" />
                              <div className={`${services.servicesContentBox}`}>
                                  <h4>16+ Years’ Experience</h4>
                                  <p>In-House Experienced Professionals</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className={`${services.servicesBox}`}>
                              <img src={why3} alt="" />
                              <div className={`${services.servicesContentBox}`}>
                                  <h4>100% Satisfaction Guarantee</h4>
                                  <p>Get Your Work Done, OR Your Money Back</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className={`${services.servicesBox}`}>
                              <img src={why4} alt="" />
                              <div className={`${services.servicesContentBox}`}>
                                  <h4>Increase 200% ROI</h4>
                                  <p>Increase Your Reach Then Revenue</p>
                              </div>
                          </div>
                      </div>
                      {/* <div className="col-4">
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
                      </div> */}
                  </div>
              </div>
          </section>
    </>
  )
}

export default Services