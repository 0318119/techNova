import React from 'react'
// CSS =========================================
import home_page from './css/homeFile.module.css'
// IMAGES ======================================
import aboutImg from './images/teamCover.webp'
import headLines from './images/icons/headLines.png'

function TechNoveAbout() {
  return (
    <>
    <section className={`${home_page.aboutSection}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-7 p-0">
                    <div className={`${home_page.aboutTxtBox}`}>
                        <h4 className={`${home_page.aboutHead}`}>About Tech Nova</h4>
                        <img src={headLines} alt="" />
                        <p>
                            Tech Nova always aims at infusion of latest technologies for the development of Websites and Mobile Applications. As a Best Web and Mobile Applications Development Company, we know how a Website and Mobile App can take off with proper Idea, Design, and implementation!
                        </p>
                        <p>
                            Tech Nova is formulated to serve society by providing Web Services, Mobile Services, and other IT services. Being a Top Web and App Development Company we always work on innovative and unique solutions as per client needs.
                        </p>
                        <p>
                            We are one the Best Web Development companies in India, USA We work on different CMS and Frameworks like Codeigniter, Laravel, WordPress, Magento, Shopify, etc and at the same time, we work on Android Apps, iOS Apps, Flutter, Nodejs, ReactJS, AngularJS, VueJS, etc. Hire Top Web & App Experts to cover all your Web and App Development requirements.
                        </p>
                        <p>
                            Our Team of Web & Mobile App Developers are well experienced and talented in their respective platforms. Our work is always requirement specific and user oriented, we always focus on great communication through out work cycle and we provide complete maintenance and support. We always believe in long term work relationship with clients.
                        </p>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-4 p-0">
                    <div className={`${home_page.aboutImgBox}`}>
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default TechNoveAbout