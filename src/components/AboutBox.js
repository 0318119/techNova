import React from 'react'
// ICONS ============
import why1 from './images/icons/watch.avi'
import why2 from './images/icons/why-2-w.avi'
import why3 from './images/icons/why-3-w.avi'
import why4 from './images/icons/why-4-w.avi'
import headLines from './images/icons/headLines.png'
// MODULE CSS =============
import About from './css/services.module.css'


function AboutBox() {
  return (
    <>
          <section className={`${About.services_sided_icon}`}>
              <div className="container">
                  <div className="row">
                    <div className="col-lg-3">
                          <div className={`${About.servicesBox}`} id={`${About.servicesBoxActive}`}>
                            <img src={why1} alt="" />
                              <div className={`${About.servicesContentBox}`}>
                                  <h4>12 hours delivery</h4>
                                  <p>Shortest turn around time in design industrt.</p>
                            </div>
                        </div>
                    </div>
                      <div className="col-lg-3">
                          <div className={`${About.servicesBox}`}>
                              <img src={why2} alt="" />
                              <div className={`${About.servicesContentBox}`}>
                                  <h4>16+ Years’ Experience</h4>
                                  <p>Providing Exceptional Services All Across The Globe</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className={`${About.servicesBox}`}>
                              <img src={why3} alt="" />
                              <div className={`${About.servicesContentBox}`}>
                                  <h4>100% Satisfaction Guarantee</h4>
                                  <p>Unmatched Customer Support 24/7</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className={`${About.servicesBox}`}>
                              <img src={why4} alt="" />
                              <div className={`${About.servicesContentBox}`}>
                                  <h4>Increase 200% ROI</h4>
                                  <p>100% Customer Satisfaction Guaranteed</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

export default AboutBox