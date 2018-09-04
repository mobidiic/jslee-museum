import React, { Component } from 'react'
import {MdChevronLeft} from 'react-icons/md/'
import {MdChevronRight} from 'react-icons/md/'
import Proptypes from 'prop-types'
import '../../../stylesheets/SliderView.scss'


class SliderView extends Component {
  render(){
    const { onPrev, onNext } = this.props
    return(
      <div className="slider-wrapper">
        <ul className="slider">
          <li>first</li>
          <li>second</li>
          <li>third</li>
        </ul>
        <div className="left-arrow">
          <div className="circle" onClick={onPrev}>
            <MdChevronLeft />
          </div>
        </div>
        <div className="right-arrow">
          <div className="circle" onClick={onNext}>
            <MdChevronRight />
          </div>
        </div>
      </div>
    )
  }
}

SliderView.proptypes={
  onPrev: Proptypes.func,
  onNext: Proptypes.func
}

SliderView.defaultProps={
  onPrev: f=>f,
  onNext: f=>f
}

export default SliderView
