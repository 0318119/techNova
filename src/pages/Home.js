import React from 'react'
// COMPONENTS ================================================
import Home_slider from '../components/Home_Slider'
import CertifiedServices from '../components/CertifiedServices'
import TechNoveAbout from '../components/TechNoveAbout'
import ServeIndustries from '../components/ServeIndustries'
import HomeTabs from '../components/HomeTabs'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import RequestForm from '../components/RequestForm'
import services from '../components/assets/css/customerSatisfaction.module.css'
import CustomerSaticfaction from '../components/CustomerSaticfaction'
import headLines from '../components/assets/images/icons/headLines.png'



function Home() {
  return (
    <>
    <Home_slider />
      <section className={`${services.services_sided_icon}`}>
        <div className="container">
          <div className="row justify-content-center mt-3">
            <h4 className={`${services.servicesHead}`}>
              Why Should You Hire Tech Nova As Your Digital Marketing Company?
            </h4>
            <img src={headLines} alt="" className={`${services.headLinesImg}`} />
            <p>
              As the leading digital marketing company in USA, we strive to understand your business goals first as a client before else. We have assisted thousands of clients to help them elevate their business either small or large around the globe to build transparent, accountable and great results with our succeeding and unique strategies to boost brand awareness. Our unique methodology creates a gateway for each decision we make to align with your business goals in mind and this is how we take the lead elevating values for your business through our creative digital marketing services.
            </p>
          </div>
          <CustomerSaticfaction 
            headOneTxt="Quick Turn-Around"
            headTwoTxt="16+ Years’ Experience"
            headThreeTxt="100% Satisfaction Guarantee"
            headFourTxt="Increase 200% ROI"
            // =============================
            BoxOneDes="Get Project Delivered Before Your Expectations"
            BoxTwoDes="In-House Experienced Professionals"
            BoxThreeDes="Get Your Work Done, OR Your Money Back"
            BoxFourDes="Increase Your Reach Then Revenue"
          />

        </div>
      </section>
    <CertifiedServices/>
    <TechNoveAbout />
    <ServeIndustries />
    <HomeTabs />
    <RequestForm />
    <Testimonials />
    <ContactForm />
    <Footer />
    </>
  )
}

export default Home