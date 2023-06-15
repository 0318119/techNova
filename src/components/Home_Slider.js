import React from 'react'
// CSS =========================
import slide_style from './assets/css/slider.module.css'
// IMAGES ======================
import slider_img from '../components/assets/images/slider/slider.webp'
// COMPONENTS ==================
import NavBar from '../components/NavBar'
// ICONS =======================
import { BsFillCheckCircleFill as Approve_ico} from "react-icons/bs";



function Home_Slider() {
  return (
    <>
      <section className={`${slide_style.slideSection}`}>
        <NavBar/>
        <div className="container" id={`${slide_style.slideCon}`}>
          <div className="row">
            <div className="col-lg-6" id={`${slide_style.colFlex}`}>
              <div className={`${slide_style.slideBox}`}>
                <h5 className={`${slide_style.slideTextBox}`}>
                  <span>Best Web & Mobile App</span>
                </h5>
                <h4 className={`${slide_style.textSlide}`}>Development Company</h4>
                <p>
                  High Quality Web & Mobile Application Design & Development Solution, 
                  that will help you to achieve new heights in your business.
                  We build what you love and help you to grow your business
                  with high quality application design and development services.
                </p>
                <ul className={`${slide_style.slideList}`}>
                  <li><Approve_ico/>100% Customer Satisfaction</li>
                  <li><Approve_ico />Award Winning NJ Digital Marketing Agency</li>
                  <li><Approve_ico />Unique Designs</li>
                </ul>
                <div className={`${slide_style.btnBox}`}>
                  <button className={`${slide_style.btnOne}`}>Talk to Our Consultant</button>
                  <button className={`${slide_style.btnTwo}`}>Our Portfolio</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${slide_style.slideBox}`}>
                <img src={slider_img} alt=""  className={`${slide_style.sliderPicture}`}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home_Slider



// ==========================================================================================

// class FormSlider extends Component {
//   render() {
//     const settings = {
//       focusOnSelect: true,
//       infinite: true,
//       dots :  false,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       speed: 500,
//       className: 'Homeslider'
//     };
//     return (
//       <div className={`${slide_style.mainBoxSlide}`}>
//         <Slick_slides {...settings}>
//           <div className={`${slide_style.slideItem}`}>
//             <div className={`${slide_style.textSlide}`}
//               style={{
//                 backgroundImage: "url(" + image + ")"
//               }}>
//               <h4>One Slide</h4>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, pariatur repudiandae? Blanditiis esse consequuntur sit deleniti illo ratione nesciunt, illum commodi iure molestias beatae porro quas obcaecati facilis placeat recusandae?
//               </p>
//             </div>
//           </div>
//           <div className={`${slide_style.slideItem}`}>
//             <div className={`${slide_style.textSlide}`}
//               style={{
//                 backgroundImage: "url(" + image + ")"
//               }}>
//               <h4>One Slide</h4>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, pariatur repudiandae? Blanditiis esse consequuntur sit deleniti illo ratione nesciunt, illum commodi iure molestias beatae porro quas obcaecati facilis placeat recusandae?
//               </p>
//             </div>
//           </div>
//           <div className={`${slide_style.slideItem}`}>
//             <div className={`${slide_style.textSlide}`}
//               style={{
//                 backgroundImage: "url(" + image + ")"
//               }}>
//               <h4>One Slide</h4>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, pariatur repudiandae? Blanditiis esse consequuntur sit deleniti illo ratione nesciunt, illum commodi iure molestias beatae porro quas obcaecati facilis placeat recusandae?
//               </p>
//             </div>
//           </div>
//         </Slick_slides>
//       </div>
//     );
//   }
// }