import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OpenInfo from '../lib/OpenInfo'
import NoticInfo from '../lib/NoticInfo'
import noticImg1 from '../../../imgs/src/noticImg1.jpeg'
import '../../../stylesheets/NoticArticle.scss'

class NoticArticle extends Component{

  render(){
    const {prevNotic, nextNotic} = this.props
    const time = "09:00 - 18:00"
    return (
      <div className="notice">
        <h3> 공지사항 </h3>
        <OpenInfo time={time} />
        <NoticInfo noticImg={noticImg1} />
        <div className="exhib-more">
          <p><a href="#"> 더 알아보기... </a></p>
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
