import React, { Component } from 'react'

class NoticInfo extends Component {
  render(){
    const {prevNotic, nextNotic} = this.props
    return(
      <div className="notic-wrapper">
        <div className="img-wrapper">
          이미지가 없습니다
        </div>
        <div className="headline">
          공지 제목
        </div>
        <div className="details">
          공지 설명..
        </div>
        <div className="prevNotic" onClick={prevNotic}>
          이전
        </div>
        <div className="nextNotic" onClick={nextNotic}>
          다음
        </div>
      </div>
    )
  }
}

export default NoticInfo
