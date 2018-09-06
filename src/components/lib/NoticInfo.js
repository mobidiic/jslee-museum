import React, { Component } from 'react'
import {FaArrowLeft} from 'react-icons/Fa'
import {FaArrowRight} from 'react-icons/Fa'
import Proptypes from 'prop-types'
import LineEllipsis from 'react-lines-ellipsis'
import '../../../stylesheets/NoticInfo.scss'

class NoticInfo extends Component {
  render(){
    const {noticImg, noticHeadline, noticDetails, prevNotic, nextNotic} = this.props
    return(
      <div className="notic-wrapper">
        <div className="img-wrapper">
          <img className="notic-img" src={noticImg} />
        </div>
        <div className="headline">
          <a href="#">
            {noticHeadline}
          </a>
        </div>
        <div className="details">
          <a href="#">
          <LineEllipsis text={noticDetails}
                        maxLine= '4'
                        ellipsis= '...'
                        trimRight
                        basedOn= 'letters' />
          </a>
        </div>
        <div className="prevNotic" onClick={prevNotic}>
          <FaArrowLeft />
          이전
        </div>
        <div className="nextNotic" onClick={nextNotic}>
          다음
          <FaArrowRight />
        </div>
      </div>
    )
  }
}

NoticInfo.propTypes={
  noticHeadline: Proptypes.string,
  noticDetails: Proptypes.string,
  prevNotic: Proptypes.func,
  nextNotic: Proptypes. func
}

NoticInfo.defaultProps={
  noticHeadline: "이중섭미술관 내부공사에 따른 2층 기획전시관 폐쇄.",
  noticDetails: "이중섭미술관에 대한 관심과 성원 감사드립니다. 이중섭미술관은 내부공사로 인해 2층 기획전시관을 임시 휴관하고 1층 상설전시실을 무료로 개방하고 있습니다. 빠른 시일 내에 공사가 마무리 되도록 노력하겠습니다. 불편을 드려 죄송합니다.",
  prevNotic: f => f,
  nextNotic: f=> f
}



export default NoticInfo
