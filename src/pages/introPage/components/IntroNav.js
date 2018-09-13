import React from 'react'
import {FaHome} from 'react-icons/Fa'
import '../../../../stylesheets/pages/introPage/IntroNav.scss'

const IntroNav = ({goBack, scrollToMuseum, scrollToLeejs, scrollToStudio}) => {
  return (
    <div id="navi-wrapper">
      <div className="navi-go-back">
        <span className="navi-home">
          <FaHome onClick={goBack}/>
        </span>
        <span className="navi-slash"> > </span>
        <span className="navi-current"> 소개 </span>
      </div>
      <div className="navi-menu">
        <div id="navi-museum" onClick={scrollToMuseum}>
          미술관
        </div>
        <div id="navi-leejs" onClick={scrollToLeejs}>
          이중섭
        </div>
        <div id="navi-studio" onClick={scrollToStudio}>
          스튜디오
        </div>
      </div>
    </div>
  )
}

export default IntroNav
