import React, { useState } from 'react'
import request from '../components/css/RequestForm.module.css'
import { Link } from 'react-router-dom'
import { BiChat as Chat_ico} from "react-icons/bi";
import { MdOutlineAddIcCall as Call_ico} from "react-icons/md";




function RequestForm() {
const [isOpen, setOpen] = useState(false)
  const OpenForm = () =>{
    setOpen(!isOpen)
  }
  return (
    <>
    <div className={`${request.requestFormMainBox}`}>
        <div className={`${request.requestChatSlide}`}>
          <Chat_ico />
          <a>Chat with us</a>
        </div>
        <div className={`${request.requestChatSlide} ${request.requestChatSlideScd}`}>
          <Call_ico />
          <a>12345678910</a>
        </div>

        {/* ============================= */}
        <div className={`${request.rigtsideFormSection}`} id={isOpen ? `${request.rightFormBox}` : false}>
          <button onClick={OpenForm}>Lest get started</button>
          <div className={`${request.formBox}`}>
            <form action="">
              <h5>Sign Up Now & <br /> Let’s Get Started</h5>
              <div class="form-group mt-3">
                <input type="text" class="form-control" placeholder="Enter Your Name*" required/><br />
                <input type="emal" class="form-control" placeholder="Enter Your Email*" required /><br />
                <input type="number" class="form-control" placeholder="Enter Your Phone*" required /><br />
              </div>
              <div class="form-group">
                <label className='mb-2' style={{color: "white"}}>Tell About Your Project</label>
                <textarea class="form-control" rows="3"></textarea>
              </div>
              <button className={`${request.rightSideFormBtn}`} type='submit'>Submit</button>
            </form>
          </div>
        </div>
    </div>
    </>
  )
}

export default RequestForm