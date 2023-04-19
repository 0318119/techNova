import React from 'react'
// ==================================
import about_style from '../pages/assets/css/about.module.css'
// ========================================
import { BsFillCheckCircleFill as Approve_ico } from "react-icons/bs";


function ContactForm() {
  return (
    <>
    <section className={about_style.contactFormSection}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className={`${about_style.contactLeftArea}`}>
                        <h5>
                            Best Solution As Per Your Business Needs
                        </h5>
                        <p>
                            We deliver the quality solution as per your business requirements, each business has different requirements and different target audiences. We always deliver solutions which helps you to stand out your business in a competitive market.
                        </p>
                        <ul>
                            <li><Approve_ico /> <span>Unique and Creative Ideas For Your Business</span></li>
                            <li><Approve_ico /> <span>High Performing Product Delivery</span></li>
                            <li><Approve_ico /> <span>Affordable Rates and Timeline Delivery</span></li>
                            <li><Approve_ico /> <span>Long Term Support & Maintenance Services</span></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className={`${about_style.contactRightArea}`}>
                        <h5>Get Free Consultancy</h5>
                        <form>
                            <div className={`${about_style.formFlexBox}`}>
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Your Name" required/>
                                </div>
                                <div className="form-group">
                                    <label>Your Email</label>
                                    <input type="email" className="form-control" placeholder="Enter Your Email" required/>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <label>Your Number</label>
                                <input type="number" className="form-control" placeholder="Enter Your Number" required />
                            </div>
                            <select className="form-select mt-3"  required="required">
                                <option value="" selected>I am Interested in</option>
                                <option value="Logo Design">Logo Design  </option>
                                <option value="Brand Development ">Brand Development </option>
                                <option value="Web Design &amp; Development ">Web Design &amp; Development </option>
                                <option value="App Design &amp; Development">App Design &amp; Development </option>
                                <option value="Back-End Development">Back-End Development </option>
                                <option value="Digital Marketing ">Digital Marketing </option>
                                <option value="Marketing Collaterals">Marketing Collaterals </option>
                                <option value="Motion Graphics">Motion Graphics </option>
                                <option value="Website Management">Website Management </option>
                                <option value="Domain Registration">Domain Registration </option>
                                <option value="Creative Copywriting">Creative Copywriting </option>
                                <option value="2D &amp; 3D Illustration">2D &amp; 3D Illustration </option>
                            </select>

                            <div className="form-group mt-3">
                                <label for="exampleFormControlTextarea1">Tell Us About Your Project</label>
                                <textarea className="form-control mt-2"></textarea>
                            </div>
                            <div className="form-check mt-3" required>
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Term & Conditions Apply</label>
                            </div>
                            <button type='submit' className={`${about_style.submitBtn}`}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactForm