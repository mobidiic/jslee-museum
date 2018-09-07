import React, { Component } from 'react'
import Template from './ui/Template'
import HeaderNav from './ui/HeaderNav'
import MainHeader from './ui/MainHeader'
import MainNav from './ui/MainNav'
import SubNav from './ui/SubNav'
import SliderView from './ui/SliderView'
import CardView from './ui/CardView'
import * as $ from 'jquery'
import touchSlider from 'jquery.touchslider'
import '../../stylesheets/App.scss'



class App extends Component{

  componentDidMount(){
    $("#touchslider").touchSlider({
      mouseUse: true,
      page:1,
      resize: true,
      view:1,
      paging:true,
      controls: false,
      gap: 0,
      roll: 1,
      transition: true,
      autoplay:{
        enable: true,
        interval: 3500
      },
      btn_prev: $('.left-arrow'),
      btn_next: $('.right-arrow')
    })

    window.onscroll = function(){stickyFunc()}
    const mainNav = document.getElementById('main-nav')
    const subNav = document.getElementById('sub-nav')
    const mainSticky = mainNav.offsetTop
    const subSticky = subNav.offsetTop
    const stickyFunc = function(){
      if(window.pageYOffset >= mainSticky && window.pageYOffset >= subSticky){
        mainNav.classList.add("sticky")
        subNav.classList.add("sticky")
      }else{
        mainNav.classList.remove("sticky")
        subNav.classList.remove("sticky")
        }
      }

    }



  render(){
    return (
        <Template headerNav={<HeaderNav />}
                  mainHeader={<MainHeader />}
                  mainNav={<MainNav />}
                  subNav={<SubNav />}
                  sliderView={<SliderView />}
                  cardView={<CardView />}
        />
    )
  }
}

export default App
