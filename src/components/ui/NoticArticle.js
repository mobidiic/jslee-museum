import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NoticArticle extends Component{

  render(){
    const {prevNotic, nextNotic} = this.props
    return (
      <div className="notice">
        <h3> 공지사항 </h3>
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

NoticArticle.proptypes={
  prevNotic: PropTypes.func,
  nextNotic: PropTypes.func
}

NoticArticle.defaultProps={
  prevNotic: f=>f,
  nextNotic: f=>f
}

export default NoticArticle
