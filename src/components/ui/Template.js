import React, { Component } from 'react'
import classNames from 'classnames'
import Footer from './Footer'
import '../../../stylesheets/Template.scss'


const Template = ({headerNav, mainHeader, mainNav, subNav, sliderView, cardView}) => {
  return (
    <main className="template">
      <div className="header">
          {headerNav}
      </div>
      <div className="container">
        <div className="header-wrapper">
          {mainHeader}
        </div>
        <div className="nav-wrapper">
          {mainNav}
          {subNav}
        </div>
        <div className="slider-wrapper">
          {sliderView}
        </div>
      </div>
      <div className="container-next">
        <div className="article-wrapper">
          {cardView}
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Template
