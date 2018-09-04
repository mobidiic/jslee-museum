import React, { Component } from 'react'
import classNames from 'classnames'


const Template = ({headerNav, mainHeader, mainNav, sliderView, cardView}) => {
  return (
    <main className="template">
      <div className="header">
          {headerNav}
      </div>
      <div className="container">
        {mainHeader}
        <div className="nav-wrapper">
          {mainNav}
        </div>
        <div className="slider-wrapper">
          {sliderView}
        </div>
        <div className="article-wrapper">
          {cardView}
        </div>
      </div>
    </main>
  )
}

export default Template
