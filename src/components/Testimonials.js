import React, { Component } from 'react'
import testimonials from './assets/css/testimonials.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import clientOne from '../components/assets/images/testimonials/Jay-Saferra.webp'
import clientTwo from '../components/assets/images/testimonials/1.webp'
import clientThree from '../components/assets/images/testimonials/Shanaya-Anderson.webp'
import "slick-carousel/slick/slick-theme.css";


function Testimonials() {
    return (
        <>
            <section className={`${testimonials.testiSection}`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10 p-0">
                            <Testimonials_Slider />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials


class Testimonials_Slider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            focusOnSelect: true,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "testimonialsSlider",
        };
        return (
            <div className={`${testimonials.slideMainBox}`}>
                <Slider {...settings}>
                    <div className={`${testimonials.slideBox}`}>
                        <img src={clientOne} alt="" />
                        <div className={`${testimonials.slideContentBody}`}>
                            <div className={`${testimonials.headBox}`}>
                                <h4>Jay Sferra,</h4>
                                <span>Brand Owner</span>
                            </div>
                            <div className={`${testimonials.slideContentBox}`}>
                                <h4>Logo and Website</h4>
                                <p>
                                    I was looking to have a Logo and Website created for my business. I contacted Tech Nova and spoke to a gentlemen named Bee. He is a friendly, knowledgeable guy who was my POC. He helped me design my system and explained the process to me. He worked closely with me to ensure there no was miscommunication.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${testimonials.slideBox}`}>
                        <img src={clientTwo} alt="" />
                        <div className={`${testimonials.slideContentBody}`}>
                            <div className={`${testimonials.headBox}`}>
                                <h4>Ron Burkhardt,</h4>
                                <span>Brand Owner</span>
                            </div>
                            <div className={`${testimonials.slideContentBox}`}>
                                <h4>Design Stallion Thoroughbreds</h4>
                                <p>
                                    The Tech Nova team is smart, efficient and fast. Highly responsive and technically astute, they have a rare sense of urgency and usually answer requests the same day. I'm impressed by the depth and knowledge of their staff.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${testimonials.slideBox}`}>
                        <img src={clientThree} alt="" />
                        <div className={`${testimonials.slideContentBody}`}>
                            <div className={`${testimonials.headBox}`}>
                                <h4>Shanaya Anderson,</h4>
                                <span>Brand Owner</span>
                            </div>
                            <div className={`${testimonials.slideContentBox}`}>
                                <h4>Great work!</h4>
                                <p>
                                    I am very happy with the product and services received. Great customer service and attention to your needs. I will definitely recommend their services.
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}