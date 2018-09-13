import React from 'react'
import {FaHome} from 'react-icons/Fa'
import '../../../../stylesheets/pages/introPage/IntroNav.scss'

const IntroNav = () => {
  return (
    <div id="navi-wrapper">
      <div className="navi-go-back">
        <FaHome />
        <span className="navi-slash"> > </span>
        <span className="navi-current"> 소개 </span>
      </div>
      <div className="navi-menu">
        <div id="navi-museum" >
          미술관
        </div>
        <div id="navi-leejs">
          이중섭
        </div>
        <div id="navi-studio">
          스튜디오
        </div>
      </div>
    </div>
  )
}

export default IntroNav
