import React, { Component } from 'react'
import HeaderNav from '../../components/ui/HeaderNav'
import MainHeader from '../../components/ui/MainHeader'
import Footer from '../../components/ui/Footer'
import IntroNav from './components/IntroNav'
import Museum from './components/Museum'
import Leejs from './components/Leejs'
import Studio from './components/Studio'
import '../../../stylesheets/pages/introPage/IntroPage.scss'

class IntroPage extends Component{
  render(){
    return(
      <div className="intro-page">
        <div className="headerNav-wrapper">
          <HeaderNav />
        </div>
        <div className="mainHeader-wrapper">
          <MainHeader />
        </div>
        <div className="intro-container">
          <div className="intro-nav">
            <IntroNav />
          </div>
          <div className="intro-contents">
            <div className="museum">
              <Museum />
            </div>
            <div className="leejs">
              <Leejs />
            </div>
            <div className="studio">
              <Studio />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default IntroPage
