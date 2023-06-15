import React from 'react'
// ===============================
import NavBar from '../components/NavBar'
// ===============================
import Review from '../components/assets/css/ourReview.module.css'
import ReviewBoxes from '../components/ReviewBoxes'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import RequestForm from '../components/RequestForm'
function OurReview() {
  return (
    <>
          <div className="allPagesBannerShape" id={`${Review.Banner}`}>
              <NavBar />
              <section id={`${Review.InnerBanner}`}>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                    <div className={`${Review.bannerContentBox}`}>
                        <h3>Our Creativity Is What People Speak For</h3>
                        <p>
                          Here Is A Look At What Customers Really Have To Say About Our Design & Development Services. Design Stallion Have Been Overwhelmingly Positive, Our Clients Love What We Create And Show Their Utmost Gratitude
                        </p>
                    </div>
                    </div>
                  </div>
                </div>
              </section>
          </div>

          <ReviewBoxes />
          <RequestForm />
          <ContactForm />
          <Footer />
    </>
  )
}

export default OurReview