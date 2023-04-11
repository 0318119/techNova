import React from 'react'
// CSS  =============================================
import Serve_style from './css/ServeIndustries.module.css'
// ICONS ============================================
import Edu from './images/icons/educational_web.avi'
import Finan from './images/icons/finance_icon.avi'
import EComm from './images/icons/ecommerce_icon.avi'
import  Business from './images/icons/business_icon.avi'
import Food from './images/icons/food_icon.avi'
import Social from './images/icons/social_networking_icon.avi'
import Health from './images/icons/health_icon.avi'
import Travel from './images/icons/travel_icon.avi'
import Construction from './images/icons/construction_icon.avi'


import headLines from './images/icons/headLines.png'

function ServeIndustries() {
  return (
    <>
    <section className={`${Serve_style.serveSection}`}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={`${Serve_style.serveHeadBox}`}>
                        <h4>Areas Of Expertise</h4>
                        <img src={headLines} alt="" />
                        <p>We Work With All Industries.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className={`${Serve_style.servBox}`}>
                        <h5 className={`${Serve_style.serveInnerBox}`}>
                            <img src={Edu} alt=""/>
                            <span>Education</span>
                        </h5>
                        <p>
                            Institution Portals, Websites, Mobility Apps, Educational Games And E-Learning
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={`${Serve_style.servBox}`} id={`${Serve_style.bgShadowBox}`}>
                        <h5 className={`${Serve_style.serveInnerBox}`}>
                            <img src={Finan} alt="" />
                            <span>Finance</span>
                        </h5>
                        <p>
                            Business Intelligence, Financial And Marketing Analytics
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={`${Serve_style.servBox}`}>
                        <h5 className={`${Serve_style.serveInnerBox}`}>
                            <img src={EComm} alt="" />
                            <span>Ecommerce</span>
                        </h5>
                        <p>
                            E-Store Generation, CRM, Operation Management And Secure Transactions
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={`${Serve_style.servBox}`} id={`${Serve_style.bgShadowBox}`}>
                        <h5 className={`${Serve_style.serveInnerBox}`}>
                            <img src={Business} alt="" />
                            <span>Business</span>
                        </h5>
                        <p>
                            Enterprise Resource Planning, Customer Relationship Management, Project Management And Business Process Management Software
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={`${Serve_style.servBox}`}>
                        <h5 className={`${Serve_style.serveInnerBox}`}>
                            <img src={Food} alt="" />
                            <span>Food</span>
                        </h5>
                        <p>
                            Eatery Websites, App Development And Food Delivery Mechanisms
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={`${Serve_style.servBox}`} id={`${Serve_style.bgShadowBox}`}>
                        <h5 className={`${Serve_style.serveInnerBox}`}>
                            <img src={Social} alt="" />
                            <span>Social <br/> Networking</span>
                        </h5>
                        <p>
                            Social Media Marketing Solutions And Integrated Reporting Services
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={`${Serve_style.servBox}`}>
                        <h5 className={`${Serve_style.serveInnerBox}`}>
                            <img src={Health} alt="" />
                            <span>Health</span>
                        </h5>
                        <p>
                            Patient & Hospital Management Systems
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={`${Serve_style.servBox}`} id={`${Serve_style.bgShadowBox}`}>
                        <h5 className={`${Serve_style.serveInnerBox}`}>
                            <img src={Travel} alt="" />
                            <span>Travel</span>
                        </h5>
                        <p>
                            E-Ticketing, ERP Assurance And Customer Resource Management
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={`${Serve_style.servBox}`}>
                        <h5 className={`${Serve_style.serveInnerBox}`}>
                            <img src={Construction} alt="" />
                            <span>Construction</span>
                        </h5>
                        <p>
                            3d Model Construction And App Development
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ServeIndustries