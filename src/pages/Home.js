import React from 'react'
// COMPONENTS ================================================
import Home_slider from '../components/Home_Slider'
import Services from '../components/Services'
import CertifiedServices from '../components/CertifiedServices'
import TechNoveAbout from '../components/TechNoveAbout'
import ServeIndustries from '../components/ServeIndustries'
import HomeTabs from '../components/HomeTabs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Home_slider />
    <Services/>
    <CertifiedServices/>
    <TechNoveAbout />
    <ServeIndustries />
    <HomeTabs />
    <Testimonials />
    <Footer />
    </>
  )
}

export default Home