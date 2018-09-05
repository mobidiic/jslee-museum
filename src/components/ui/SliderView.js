import React, { Component } from 'react'
import {MdChevronLeft} from 'react-icons/md/'
import {MdChevronRight} from 'react-icons/md/'
import Proptypes from 'prop-types'
import '../../../stylesheets/SliderView.scss'
import url1 from '../../../imgs/src/sliderImg1.jpg'
import url2 from '../../../imgs/src/sliderImg2.jpg'
import url3 from '../../../imgs/src/sliderImg3.jpg'
import url4 from '../../../imgs/src/sliderImg4.jpg'



class SliderView extends Component {
  render(){
    const { onPrev, onNext } = this.props
    return(
      <div className="slider-wrapper">
        <div id="touchslider">
          <ul>
            <li><img src={url1} /></li>
            <li><img src={url2} /></li>
            <li><img src={url3} /></li>
            <li><img src={url4} /></li>
          </ul>
        </div>
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
