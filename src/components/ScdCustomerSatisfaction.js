import React from 'react'
import web_style from '.././pages/assets/css/webdesign.module.css'


function ScdCustomerSatisfaction() {
  return (
    <>
    <section className={`${web_style.customerSection}`}>
        <div className="container">
            <div className="row">
                <h5 className={`${web_style.cusSupportHead}`}>Helping Businesses Outperform With Custom Digital Marketing Services</h5>
                      <p className={`${web_style.cusSupportDes}`}>TechNova is committed to providing professional digital services to your brand’s culture, core values & distinction. We take a strategic approach to creating unique brand identities by working with the industry’s best designers. We create perfect designs that speak for themselves.</p>
            </div>
            <div className="row" id={`${web_style.boxRow}`}></div>
        </div>
    </section>
    </>
  )
}

export default ScdCustomerSatisfaction