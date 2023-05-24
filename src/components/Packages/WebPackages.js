import React from 'react'
import web_style from '../../pages/assets/css/webdesign.module.css'

function WebPackages() {
  return (
    <section className={`${web_style.WebPackagesSection}`}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                      <div className={`${web_style.webPackagesHeadBox}`}>
                          <h5>Pricing Plan That Works for Everyone!</h5>
                          <p>
                              We, at Tech Nova, excel in providing impeccable services at very competitive rates!
                              Align your needs and jump right in to have an experience of a lifetime!
                          </p>
                    </div>
                </div>
            </div>
           <div class="row">
                <div class="col-md-4 col-sm-6">
                      <div class={`${web_style.pricingTable}`}>
                        <div class={`${web_style.pricingTable_header}`}>
                            <h3 class={`${web_style.title}`}>Standard</h3>
                        </div>
                          <div class={`${web_style.price_value}`}>
                            <span class={`${web_style.amount}`}>$10.99</span>
                            <span class={`${web_style.duration}`}>/month</span>
                        </div>
                            <ul class={`${web_style.content_list}`}>
                                <li>50GB Disk Space</li>
                                <li>50 Email Accounts</li>
                                <li>Maintenance</li>
                                <li>15 Subdomains</li>
                                <li>50GB Disk Space</li>
                                <li>50 Email Accounts</li>
                                <li>Maintenance</li>
                                <li>15 Subdomains</li>
                                <li>50GB Disk Space</li>
                                <li>50 Email Accounts</li>
                                <li>Maintenance</li>
                                <li>15 Subdomains</li>
                            </ul>
                        <div class={`${web_style.pricingTable_Btn}`}>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class={`${web_style.pricingTable}`}>
                        <div class={`${web_style.pricingTable_header}`}>
                            <h3 class={`${web_style.title}`}>Standard</h3>
                        </div>
                        <div class={`${web_style.price_value}`}>
                            <span class={`${web_style.amount}`}>$10.99</span>
                            <span class={`${web_style.duration}`}>/month</span>
                        </div>
                        <ul class={`${web_style.content_list}`}>
                            <li>50GB Disk Space</li>
                            <li>50 Email Accounts</li>
                            <li>Maintenance</li>
                            <li>15 Subdomains</li>
                            <li>50GB Disk Space</li>
                            <li>50 Email Accounts</li>
                            <li>Maintenance</li>
                            <li>15 Subdomains</li>
                            <li>50GB Disk Space</li>
                            <li>50 Email Accounts</li>
                            <li>Maintenance</li>
                            <li>15 Subdomains</li>
                        </ul>
                        <div class={`${web_style.pricingTable_Btn}`}>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class={`${web_style.pricingTable}`}>
                        <div class={`${web_style.pricingTable_header}`}>
                            <h3 class={`${web_style.title}`}>Standard</h3>
                        </div>
                        <div class={`${web_style.price_value}`}>
                            <span class={`${web_style.amount}`}>$10.99</span>
                            <span class={`${web_style.duration}`}>/month</span>
                        </div>
                        <ul class={`${web_style.content_list}`}>
                            <li>50GB Disk Space</li>
                            <li>50 Email Accounts</li>
                            <li>Maintenance</li>
                            <li>15 Subdomains</li>
                            <li>50GB Disk Space</li>
                            <li>50 Email Accounts</li>
                            <li>Maintenance</li>
                            <li>15 Subdomains</li>
                            <li>50GB Disk Space</li>
                            <li>50 Email Accounts</li>
                            <li>Maintenance</li>
                            <li>15 Subdomains</li>
                        </ul>
                        <div class={`${web_style.pricingTable_Btn}`}>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WebPackages