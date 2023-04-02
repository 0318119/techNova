import React from 'react'
// COMPONENTS ================================================
import Home_slider from '../components/Home_Slider'
import Services from '../components/Services'
import CertifiedServices from '../components/CertifiedServices'
import TechNoveAbout from '../components/TechNoveAbout'

function Home() {
  return (
    <>
    <Home_slider />
    <Services/>
    <CertifiedServices/>
    <TechNoveAbout />
    </>
  )
}

export default Home