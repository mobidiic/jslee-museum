import React, { Component } from 'react'
import Template from './ui/Template'
import HeaderNav from './ui/HeaderNav'
import MainHeader from './ui/MainHeader'
import MainNav from './ui/MainNav'
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
      btn_prev: $('.left-arrow'),
      btn_next: $('.right-arrow')
    })
  }

  render(){
    return (
      <Template headerNav={<HeaderNav />}
                mainHeader={<MainHeader />}
                mainNav={<MainNav />}
                sliderView={<SliderView />}
                cardView={<CardView />}
      />
    )
  }
}

export default App
