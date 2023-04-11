import React, { Component } from 'react'
// ICONS ===================================================
import headLines from './images/icons/headLines.png'
import img1 from './images/award/01.webp'
import img2 from './images/award/02.webp'
import img3 from './images/award/03.webp'
import img4 from './images/award/04.webp'
import img5 from './images/award/05.webp'
import img6 from './images/award/06.webp'
import img7 from './images/award/07.webp'
import img8 from './images/award/08.webp'
import img9 from './images/award/09.webp'
import img10 from './images/award/10.webp'
import img11 from './images/award/11.webp'
import img12 from './images/award/12.webp'
import img13 from './images/award/13.webp'
import img14 from './images/award/14.webp'
import img15 from './images/award/15.webp'
import img16 from './images/award/16.webp'
import img17 from './images/award/17.webp'
import img18 from './images/award/18.webp'
import img19 from './images/award/19.webp'
import img20 from './images/award/20.webp'


// CSS =====================================================
import Certified_style from './css/CertifiedServices.module.css'
// SLICK SLIDER ============================================
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
function CertifiedServices() {
  return (
        <>
            <section className={`${Certified_style.sliderSectionAwarded}`}>
                <div className="container-fluid" >
                  <div className="row align-items-center">
                      <div className="col-1"></div>
                      <div className="col-3">
                          <div className={`${Certified_style.colSliderAward}`}>
                              <h4 className={`${Certified_style.awardedHead}`}>We Are Awarded & Certified For Our Services</h4>
                           </div>
                        </div>
                      <div className="col-1"></div>
                        
                        <div className="col-7 p-0">
                            <div className={`${Certified_style.sliderBoxAwarded}`}>
                                <SliderAwarded />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default CertifiedServices


class SliderAwarded extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            focusOnSelect: true,
            pauseOnHover: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            className: "certifiedSlider",
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                       <img src={img1} alt="" />
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div> <div>
                        <img src={img3} alt="" />
                    </div> <div>
                        <img src={img4} alt="" />
                    </div>
                    <div>
                        <img src={img5} alt="" />
                    </div>
                    <div>
                        <img src={img6} alt="" />
                    </div>
                    <div>
                        <img src={img7} alt="" />
                    </div>
                    <div>
                        <img src={img8} alt="" />
                    </div>
                    <div>
                        <img src={img9} alt="" />
                    </div>
                    <div>
                        <img src={img10} alt="" />
                    </div>
                    <div>
                        <img src={img11} alt="" />
                    </div>
                    <div>
                        <img src={img12} alt="" />
                    </div>
                    <div>
                        <img src={img13} alt="" />
                    </div>
                    <div>
                        <img src={img14} alt="" />
                    </div>
                    <div>
                        <img src={img15} alt="" />
                    </div>
                    <div>
                        <img src={img16} alt="" />
                    </div>
                    <div>
                        <img src={img17} alt="" />
                    </div>
                    <div>
                        <img src={img18} alt="" />
                    </div>
                    <div>
                        <img src={img19} alt="" />
                    </div>
                    <div>
                        <img src={img20} alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}