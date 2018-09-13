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

  componentDidMount(){
    window.onscroll = function(){selectFunc()}
    const museumStart = document.getElementById('museum')
    const leejsStart = document.getElementById('leejs')
    const studioStart = document.getElementById('studio')
    const navStyle = document.getElementById('navi-wrapper')
    const museumSelected = museumStart.offsetTop
    const leejsSelected = leejsStart.offsetTop
    const studioSelected = studioStart.offsetTop
    const museumNav = document.getElementById('navi-museum')
    const leejsNav = document.getElementById('navi-leejs')
    const studioNav = document.getElementById('navi-studio')
    const selectFunc = function(){
      if(window.pageYOffset > museumSelected && window.pageYOffset<leejsSelected){
        museumNav.classList.add('selected')
        leejsNav.classList.remove('selected')
        studioNav.classList.remove('selected')
        navStyle.style.top="100px"
      }else if(window.pageYOffset >= leejsSelected && window.pageYOffset <studioSelected){
        museumNav.classList.remove('selected')
        leejsNav.classList.add('selected')
        studioNav.classList.remove('selected')
        navStyle.style.top="40px"
      }else if(window.pageYOffset>= studioSelected){
        museumNav.classList.remove('selected')
        leejsNav.classList.remove('selected')
        studioNav.classList.add('selected')
      }
    }
  }

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
          <div id="intro-nav">
            <IntroNav />
          </div>
          <div className="intro-contents">
            <div id="museum">
              <Museum />
            </div>
            <div id="leejs">
              <Leejs />
            </div>
            <div id="studio">
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
