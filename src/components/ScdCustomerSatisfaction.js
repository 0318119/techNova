import React from 'react'
import web_style from '.././pages/assets/css/webdesign.module.css'


function ScdCustomerSatisfaction({
  BoxOneIcon,
  headOneTxt,
  BoxOneDes,
  // ============
  BoxTwoIcon,
  headTwoTxt,
  BoxTwoDes,
  // ============
  BoxThreeIcon,
  headThreeTxt,
  BoxThreeDes,
  // ============
  BoxFourIcon,
  headFourTxt,
  BoxFourDes,
}) {
  return (
    <>
      <div className="row">

        <div className="col-md-3">
          <div className={`${web_style.scdCusSatisfactBox}`} id={`${web_style.scdCusSatisfactBoxActive}`}>
            <img src={BoxOneIcon} alt="" />
            <div className={`${web_style.scdCusSatisfactInnerBox}`}>
              <h4>{headOneTxt}</h4>
              <p>{BoxOneDes}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`${web_style.scdCusSatisfactBox}`}>
            <img src={BoxTwoIcon} alt="" />
            <div className={`${web_style.scdCusSatisfactInnerBox}`}>
              <h4>{headTwoTxt}</h4>
              <p>{BoxTwoDes}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`${web_style.scdCusSatisfactBox}`}>
            <img src={BoxThreeIcon} alt="" />
            <div className={`${web_style.scdCusSatisfactInnerBox}`}>
              <h4>{headThreeTxt}</h4>
              <p>{BoxThreeDes}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`${web_style.scdCusSatisfactBox}`}>
            <img src={BoxFourIcon} alt="" />
            <div className={`${web_style.scdCusSatisfactInnerBox}`}>
              <h4>{headFourTxt}</h4>
              <p>{BoxFourDes}</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ScdCustomerSatisfaction