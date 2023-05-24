import React from 'react'
import web_style from '../pages/assets/css/webdesign.module.css'
import web_one from '../components/images/icons/Strategy.webp';
import web_two from '../components/images/icons/Design.webp';
import web_three from '../components/images/icons/Development.webp';
import web_four from '../components/images/icons/Launch.webp';

function DesignProcess() {
  return (
    <section className={`${web_style.designProcessSection}`}>
        <div className="container">
            <div className="row">
                <div className={`${web_style.designProcessHeadBox}`}>
                    <h5>Detailed Process <br /> that Defines Professional Excellence!</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <div className={`${web_style.designProcessBox}`}>
                        <img src={web_one} alt="" />
                          <h5>Strategy</h5>
                          <p>
                              We formulate result-driven strategies that boost the overall ROI of your business.
                          </p>
                    </div>
                </div>
                <div className="col-3">
                    <div className={`${web_style.designProcessBox}`}>
                        <img src={web_two} alt="" />
                        <h5>Design</h5>
                        <p>
                            Our creative designs are functional and value-driven that cope up with your requirements.
                        </p>
                    </div>
                </div>
                <div className="col-3">
                    <div className={`${web_style.designProcessBox}`}>
                        <img src={web_three} alt="" />
                          <h5>Development</h5>
                        <p>
                            Our developers build a user-interface that runs smooth and meets your business’s requirements.
                        </p>
                    </div>
                </div>
                <div className="col-3">
                    <div className={`${web_style.designProcessBox}`}>
                        <img src={web_four} alt="" />
                        <h5>Launch</h5>
                        <p>
                            Just before the launch, our QA team ensures that the project is flawless and 100% bug-free.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DesignProcess