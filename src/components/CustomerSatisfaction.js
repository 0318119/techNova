import React from 'react'
import web_style from '.././pages/assets/css/webdesign.module.css'
import help_ico_1 from '../components/images/icons/help-icon-1.png'
import help_ico_2 from '../components/images/icons/help-icon-2.png'
import help_ico_3 from '../components/images/icons/help-icon-3.png'
import help_ico_4 from '../components/images/icons/help-icon-4.png'
import help_ico_5 from '../components/images/icons/help-icon-5.png'


function CustomerSatisfaction() {
  return (
    <>
    <section className={`${web_style.customerSection}`}>
        <div className="container">
            <div className="row">
                <h5 className={`${web_style.cusSupportHead}`}>Helping Businesses Outperform With Custom Digital Marketing Services</h5>
                      <p className={`${web_style.cusSupportDes}`}>TechNova is committed to providing professional digital services to your brand’s culture, core values & distinction. We take a strategic approach to creating unique brand identities by working with the industry’s best designers. We create perfect designs that speak for themselves.</p>
            </div>
            <div className="row" id={`${web_style.boxRow}`}>
                <div className="col-2">
                    <div className={`${web_style.customerSuportMainBox}`}>
                        <img src={help_ico_1} alt="" />
                        <span>Constant Client <br /> Coordination</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className={`${web_style.customerSuportMainBox}`}>
                        <img src={help_ico_2} alt="" />
                        <span>Supreme Customer <br /> Satisfaction</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className={`${web_style.customerSuportMainBox}`}>
                        <img src={help_ico_3} alt="" />
                        <span>100% Ownership <br /> Rights</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className={`${web_style.customerSuportMainBox}`}>
                        <img src={help_ico_4} alt="" />
                        <span>Secure Money <br /> Back Guarantee</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className={`${web_style.customerSuportMainBox}`}>
                        <img src={help_ico_5} alt="" />
                        <span>Industry Proven <br /> Professionals</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default CustomerSatisfaction