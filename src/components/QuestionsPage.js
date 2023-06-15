import React from 'react'
import question from './assets/css/questionspage.module.css'
import contactImg from '../components/assets/images/contact-bottom.webp'
function QuestionsPage() {
    return (
        <>
            <section className={`${question.questionSection}`}>
                <div className="container" id={`${question.questionsSecBgClor}`}>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className={`${question.questionBox}`}>
                                <div className={`${question.questionBoxLeftArea}`}>
                                    <h4>Have a Question?</h4>
                                    <div className={`${question.innerEmailQuestionBox}`}>
                                        <span>Get Free Consultation :</span>
                                        <a href="">Sales@technova.com</a>
                                    </div>
                                    <button>Let's talk</button>
                                </div>
                                <div className={`${question.questionBoxRightArea}`}>
                                    <img src={contactImg} alt="" className='img-fluid'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuestionsPage