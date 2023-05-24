import React from 'react'
// COMPONENTS ================================================
import Home_slider from '../components/Home_Slider'
import Services from '../components/Services'
import CertifiedServices from '../components/CertifiedServices'
import TechNoveAbout from '../components/TechNoveAbout'
import ServeIndustries from '../components/ServeIndustries'
import HomeTabs from '../components/HomeTabs'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import RequestForm from '../components/RequestForm'

function Home() {
  return (
    <>
    <Home_slider />
    <Services/>
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