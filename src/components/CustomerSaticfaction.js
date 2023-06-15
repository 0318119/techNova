import React from 'react'
// ICONS ============
import why1 from './assets/images/icons/watch.avi'
import why2 from './assets/images/icons/why-2-w.avi'
import why3 from './assets/images/icons/why-3-w.avi'
import why4 from './assets/images/icons/why-4-w.avi'
// MODULE CSS =============
import services from './assets/css/customerSatisfaction.module.css'


function CustomerSaticfaction(props) {
  return (
    <>
          <div className="row">
              <div className="col-lg-3">
                  <div className={`${services.servicesBox}`} id={`${services.servicesBoxActive}`}>
                      <img src={why1} alt="" />
                      <div className={`${services.servicesContentBox}`}>
                          <h4>{props?.headOneTxt}</h4>
                          <p>{props?.BoxOneDes}</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3">
                  <div className={`${services.servicesBox}`}>
                      <img src={why2} alt="" />
                      <div className={`${services.servicesContentBox}`}>
                          <h4>{props?.headTwoTxt}</h4>
                          <p>{props?.BoxTwoDes}</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3">
                  <div className={`${services.servicesBox}`}>
                      <img src={why3} alt="" />
                      <div className={`${services.servicesContentBox}`}>
                          <h4>{props?.headThreeTxt}</h4>
                          <p>{props?.BoxThreeDes}</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3">
                  <div className={`${services.servicesBox}`}>
                      <img src={why4} alt="" />
                      <div className={`${services.servicesContentBox}`}>
                          <h4>{props?.headFourTxt}</h4>
                          <p>{props?.BoxFourDes}</p>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default CustomerSaticfaction