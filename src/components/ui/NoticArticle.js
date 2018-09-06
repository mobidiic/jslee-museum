import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OpenInfo from '../lib/OpenInfo'
import NoticInfo from '../lib/NoticInfo'

class NoticArticle extends Component{

  render(){
    const {prevNotic, nextNotic} = this.props
    const day = "목"
    const time = "09:00 - 18:00"
    return (
      <div className="notice">
        <h3> 공지사항 </h3>
        <OpenInfo day={day}
                  time={time} />
        <NoticInfo prevNotic={prevNotic}
                   nextNotic={nextNotic} />
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
