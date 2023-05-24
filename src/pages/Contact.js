import React from 'react'
import NavBar from '../components/NavBar'
// ================================
import contact_style from './assets/css/contact_us.module.css'
import { BsFillEnvelopeOpenFill as Email_ico} from "react-icons/bs";
import { MdCall as Phone_ico } from "react-icons/md";
import { AiFillLinkedin as Linkedin_ico } from "react-icons/ai";
// ==============================
import why1 from '../components/images/award/20.webp'
import why2 from '../components/images/award/18.webp'
import why3 from '../components/images/award/11.webp'
import why4 from '../components/images/award/19.webp'
import why5 from '../components/images/award/15.webp'
import why6 from '../components/images/award/09.webp'
import why7 from '../components/images/award/05.webp'
import why8 from '../components/images/award/16.webp'
import QuestionsPage from '../components/QuestionsPage';
// =========================
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import RequestForm from '../components/RequestForm';


// =============================

function Contact() {
  return (
    <>
        <div className="allPagesBannerShape" id={`${contact_style.bgBanner}`}>
            <NavBar />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                              <div className={`${contact_style.contactTxtBannerBox}`}>
                                  <h5>Contact Us</h5>
                                  <p>
                                      Have a Business Idea? We provide best price for Web, <br />
                                      Mobile and Digital Marketing Solutions.
                                  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <section className={`${contact_style.contactItemsSection}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-3">
                        <div className={`${contact_style.contactItemBox}`}>
                            <Email_ico />
                            <div className={`${contact_style.contactInnerItemBox}`}>
                                <h5>Email</h5>
                                <a href="">Sales@technova.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={`${contact_style.contactItemBox}`}>
                        <Phone_ico />
                        <div className={`${contact_style.contactInnerItemBox}`}>
                            <h5>Call</h5>
                            <a href="">123456789</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={`${contact_style.contactItemBox}`}>
                            <Linkedin_ico />
                            <div className={`${contact_style.contactInnerItemBox}`}>
                                <h5>Linkedin</h5>
                                <a href="">Tech Nova</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className={`${contact_style.awardSection}`}>
              <div className="container pt-4 pb-4" style={{ background: "#6ec1e433" }}>
                <div className="row">
                    <h5 className={`${contact_style.awardedHead}`}>Our Awards</h5>
                </div>
                <div className="row justify-content-center">
                    <div className="col-2">
                        <div className={`${contact_style.awardImgBox}`}>
                        <img src={why1} alt="" />
                        <span>Clutch</span>
                        </div>
                    </div>
                    <div className="col-2">
                          <div className={`${contact_style.awardImgBox}`}>
                              <img src={why2} alt="" />
                              <span>Goodfirms</span>
                          </div>
                    </div>
                    <div className="col-2">
                          <div className={`${contact_style.awardImgBox}`}>
                              <img src={why3} alt="" />
                              <span>Appfirms</span>
                          </div>
                    </div>
                    <div className="col-2">
                          <div className={`${contact_style.awardImgBox}`}>
                              <img src={why4} alt="" />
                              <span>Extract</span>
                          </div>
                    </div>
                </div>
                  <div className="row justify-content-center mt-4">
                      <div className="col-2">
                          <div className={`${contact_style.awardImgBox}`}>
                              <img src={why5} alt="" />
                              <span>Designrush</span>
                          </div>
                      </div>
                      <div className="col-2">
                          <div className={`${contact_style.awardImgBox}`}>
                              <img src={why6} alt="" />
                              <span>Mobile App</span>
                          </div>
                      </div>
                      <div className="col-2">
                          <div className={`${contact_style.awardImgBox}`}>
                              <img src={why7} alt="" />
                              <span>Web Design</span>
                          </div>
                      </div>
                      <div className="col-2">
                          <div className={`${contact_style.awardImgBox}`}>
                              <img src={why8} alt="" />
                              <span>Up work</span>
                          </div>
                      </div>
                  </div>
            </div>
        </section>


        <QuestionsPage />
        <RequestForm />
        <ContactForm />
        <Footer />
    </>
  )
}

export default Contact