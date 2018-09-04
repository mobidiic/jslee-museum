import React, { Component } from 'react'
import Template from './ui/Template'
import HeaderNav from './ui/HeaderNav'
import MainHeader from './ui/MainHeader'
import MainNav from './ui/MainNav'
import SliderView from './ui/SliderView'
import CardView from './ui/CardView'

class App extends Component{
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
