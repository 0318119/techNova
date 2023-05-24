import React from 'react'
import Review from '../components/css/ourReview.module.css'
import apostrophe from '../components/images/apostrophe.png'
function ReviewBoxes() {
  return (
    <>
        <section className={`${Review.reviewBoxSection}`}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className={`${Review.reviewBox}`}>
                            <img src={apostrophe} alt="" />
                            <h4>Logo and Website</h4>
                                <div className={`${Review.reviewScrollBox}`}>
                                    <p>
                                        I was looking to have a Logo and Website created for my business. I contacted Design Stallion and spoke to a gentlemen named Bee. He is a friendly, kn owledgeable guy who was my POC. He helped me design my system and explained the process to me. He worked closely with me to ensure there no was miscommunication.
                                    </p>
                                </div>
                        </div>
                        <div className={`${Review.nameLogoBox}`}>
                            <h3>J</h3>
                            <h5>
                                <span>Jay Sferra</span>
                                <span>Brand Owner</span>
                            </h5>
                        </div>
                    </div>

                      <div className="col-6" id={`${Review.reviewColBox}`}>
                          <div className={`${Review.reviewBox}`}>
                              <img src={apostrophe} alt="" />
                              <h4>Design Stallion Thoroughbreds</h4>
                              <div className={`${Review.reviewScrollBox}`}>
                                  <p>
                                      The Design Stallion team is smart, efficient and fast. Highly responsive and technically astute, they have a rare sense of urgency and usually answer requests the same day. I'm impressed by the depth and knowledge of their staff.
                                  </p>
                              </div>
                          </div>
                          <div className={`${Review.nameLogoBox}`}>
                              <h3>R</h3>
                              <h5>
                                  <span>Ron Burkhardt</span>
                                  <span>Brand Owner</span>
                              </h5>
                          </div>
                      </div>
                      <div className="col-6">
                          <div className={`${Review.reviewBox}`}>
                              <img src={apostrophe} alt="" />
                              <h4>Great work!</h4>
                              <div className={`${Review.reviewScrollBox}`}>
                                  <p>
                                      I am very happy with the product and services received. Great customer service and attention to your needs. I will definitely recommend their services
                                  </p>
                              </div>
                          </div>
                          <div className={`${Review.nameLogoBox}`}>
                              <h3>S</h3>
                              <h5>
                                  <span>Shanaya Anderson,</span>
                                  <span>Brand Owner</span>
                              </h5>
                          </div>
                      </div>
                      <div className="col-6" id={`${Review.reviewColBox}`}>
                          <div className={`${Review.reviewBox}`}>
                              <img src={apostrophe} alt="" />
                              <h4>Extremely Professional Web Service,</h4>
                              <div className={`${Review.reviewScrollBox}`}>
                                  <p>
                                      My experience with Designstallion has been excellent. I have been working with Mark Allen, who is a manger that was des ignated to help me with every step of the way during the creation of my website. He is so informed and helpful. His dedication to the customer is incredible. He and I worked together during thanksgiving in order to have my website ready for the holiday season. I will forever be a happy client of Designstallion.
                                  </p>
                              </div>
                          </div>
                          <div className={`${Review.nameLogoBox}`}>
                              <h3>S</h3>
                              <h5>
                                  <span>Branson McDonald</span>
                                  <span> Brand Owner</span>
                              </h5>
                          </div>
                      </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ReviewBoxes