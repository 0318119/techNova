import React from 'react'
import NavBar from '../components/NavBar'
// =====================
import about_style from './assets/css/about.module.css'
import AboutBox from '../components/AboutBox'
// ======================
import aboutImg from '../components/images/about-sec.webp'
import { BsFillCheckCircleFill as Approve_ico } from "react-icons/bs";
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'


function AboutUs() {
  return (
    <>
      <div className="allPagesBannerShape" id={`${about_style.bgBanner}`}>
        <NavBar />

        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={`${about_style.aboutBannerTxt}`}>
                  <h5>Design Of Conviction To Global Corporations</h5>
                  <p>
                    Instant first impressions are what grab the customer for the long haul. Logos give an identity to a Brand and play a big role in notifying the presence of a business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      

      <section className={`${about_style.aboutSection}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={`${about_style.aboutImgBox}`}>
                <img src={aboutImg} alt="" className='img-fluid'/>
              </div>
            </div>
            {/* =========================== */}
            <div className="col-lg-6">
              <div className={`${about_style.aboutTxtBox}`}>
                <h5>Who we are</h5><br />
                <p>
                  Establishing a foundation to your Brand and businesses,
                  with a highly tactful team of ours acing inventive strategies.
                </p><br />
                <p>
                  We bring forth Ideas that expand the levels of creativity and challenge our mindsets to perceive art and graphics in multiple perspectives, our team of designers and their unwavered professionalism is what brings out the Quality formations, the management gets your web issues sorted and your projects completed in no time, since multitasking is done best through team work and that’s the ground setting rule of our Company.
                </p>

                <div className={`${about_style.aboutListBox}`}>
                  <ul>
                    <li><Approve_ico /> <span>Strategic Design Approach</span> </li>
                    <li><Approve_ico /> <span>Web Identity Development</span>  </li>
                    <li><Approve_ico /><span>Interactive Interface Design</span></li>
                    <li><Approve_ico /><span>Brand Identity Sketching</span></li>
                  </ul>
                  {/* ======================= */}
                  <ul>
                    <li><Approve_ico /> <span>Brand Architecture Buildup</span> </li>
                    <li><Approve_ico /> <span>Brand Positioning Solutions</span>  </li>
                    <li><Approve_ico /><span>Experience Sketching Solutions</span></li>
                    <li><Approve_ico /><span>Engagement and Analytics</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutBox />
      <ContactForm />
      <Footer />
    </>
  )
}

export default AboutUs